import { Component, Input } from '@angular/core';
import { CartService, CartItem } from '../cart.service';
import { Product } from '../products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  inputs: ['product']
})
export class ProductCardComponent {

  /** The product this card is created for. */
  public product: Product;

  /** The entry for this product in the cart. */
  public cartItem?: CartItem = null;

  /** Constructs a new product card component. */
  constructor(private cart: CartService) { }

  onIncrement(): void {
    console.log("onIncrement()");
    if (this.cartItem == null) {
      this.cartItem = this.cart.addItem(this.product);
    } else {
      this.cartItem.increment();
    }
  }

  onDecrement(): void {
    console.log("onDecrement()");
    this?.cartItem.decrement();
  }

  isOrdered(): boolean {
    return this.cartItem != null && this.cartItem.quantity > 0;
  }
}
