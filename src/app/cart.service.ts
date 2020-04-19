import { Injectable } from '@angular/core';
import { Product } from './products.service';

export class CartItem {

  _product: Product;
  _quantity: number;

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

  public increment() {
    this._quantity++;
  }

  public decrement() {
    if (this.quantity > 0) {
      this._quantity--;
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  content: CartItem[] = [];

  /** Constructs a new cart service */
  constructor() { }

  /** 
   * Adds a new item to the cart. 
   * 
   * @param product The product to add to the cart.
   * @param quantity The number of the given product which should be added to the cart.
  */
  public addItem(product: Product, quantity?: number): CartItem {
    quantity = quantity ?? 1;
    const item = new CartItem(product, quantity);
    this.content.push(item);
    return item;
  }

  /** Calculates the value of the cart */
  public calculatePrice(): number {
    const subtotal = this.content
      .map(value => value.product.price * value.quantity)
      .reduce((prev, curr) => prev + curr, 0);

    return subtotal;
  }
}
