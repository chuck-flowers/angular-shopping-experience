import { Injectable } from '@angular/core';

/** Represents a purchasable product. */
export class Product {
  public readonly name: string;
  public readonly price: number;
  public readonly imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  /** The internal array of available products. */
  private products: Product[] = [
    { name: "Hamburger", price: 4, imageUrl: "/assets/images/burger.svg" },
    { name: "Pizza", price: 10, imageUrl: "/assets/images/pizza.svg" },
    { name: "Fries", price: 2, imageUrl: "/assets/images/fries.svg" },
    { name: "Soda", price: 1, imageUrl: "/assets/images/soda.svg" }
  ];

  /** Constructs a new products service. */
  constructor() { }

  /** Gets the array of available products. */
  public getProducts(): Product[] {
    return this.products;
  }
}
