import { Injectable } from '@angular/core';
import { Product } from './products.service';
import { Observable, Subscriber } from 'rxjs';

export class CartItem {

  private _product: Product;

  private _quantity: number;
  private quantitySubs: Subscriber<number>[] = [];
  private observableQuantity: Observable<number> = new Observable(observer => {
    const quantitySubs = this.quantitySubs;
    quantitySubs.push(observer);
    return {
      unsubscribe() {
        const subIndex = quantitySubs.indexOf(observer);
        quantitySubs.splice(subIndex);
      }
    }
  })

  constructor(product: Product, quantity: number) {
    this._product = product;
    this._quantity = quantity;
  }

  /** Property containing the product for this line item. */
  public get product(): Product {
    return this._product;
  }

  /** Property containing the quantity of this line item. */
  public get quantity(): number {
    return this._quantity;
  }

  /** Property containing the observable quantity. */
  public get quantityObserver(): Observable<number> {
    return this.observableQuantity;
  }

  private onQuantityChanged(): void {
    console.log('CartItem.onQuantityChanged()');
    this.quantitySubs.forEach(sub => sub.next(this.quantity));
  }

  /** Increments the number of this product type in the cart by 1 */
  public increment(amount?: number) {
    console.log('CartItem.increment(' + amount + ')');
    this._quantity += amount ?? 1;
    this.onQuantityChanged();
  }

  /** Decrements the number of this product type in the cart by 1 if possible. */
  public decrement() {
    if (this.quantity > 0) {
      this._quantity--;
      this.onQuantityChanged();
    }
  }

  /** Calculates the cost of the specified quantity of the specified product. */
  public calculatePrice(): number {
    return this.product.price * this.quantity;
  }
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _content: CartItem[] = [];

  private contentSubs: Subscriber<CartItem[]>[] = [];
  private observableContent: Observable<CartItem[]> = new Observable(observer => {
    const contentSubs = this.contentSubs;
    contentSubs.push(observer);
    return {
      unsubscribe() {
        const subIndex = contentSubs.indexOf(observer);
        contentSubs.splice(subIndex);
      }
    }
  });

  /** Constructs a new cart service */
  constructor() { }

  public get content(): CartItem[] {
    return this._content;
  }

  public get contentObserver(): Observable<CartItem[]> {
    return this.observableContent;
  }

  private onContentChanged(): void {
    console.log('CartService.onContentChanged() - contentSubs.length = ' + this.contentSubs.length);
    this.contentSubs.forEach(sub => sub.next(this._content));
  }

  /** 
   * Adds a new item to the cart. 
   * 
   * @param product The product to add to the cart.
   * @param quantity The number of the given product which should be added to the cart.
  */
  public addItem(product: Product, quantity?: number): CartItem {

    // Provide a default value for quantity if one was not provided.
    quantity = quantity ?? 1;

    // Find the existing cart item or create a new one.
    let item = this._content.find(item => item.product == product);
    if (item != null) {
      item.increment(quantity);
    } else {
      // Create the new cart item.
      item = new CartItem(product, quantity);

      // Subscribe the item collection to its quantity observer.
      item.quantityObserver.subscribe(_ => this.onContentChanged());

      // Add the item to the content
      this._content.push(item);
    }

    // Return the cart item
    this.onContentChanged();
    return item;
  }

  /** Determines if the cart contains any items. */
  public containsItems(): boolean {
    return this._content.some(item => item.quantity > 0);
  }

  /** Calculates the price of the items in the cart */
  public calculatePrice(): number {
    const subtotal = this._content
      .map(value => value.product.price * value.quantity)
      .reduce((prev, curr) => prev + curr, 0);

    return subtotal;
  }
}
