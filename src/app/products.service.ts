import { Injectable } from '@angular/core';

/** Represents a purchasable product. */
export class Product {
  name: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  /** The internal array of available products. */
  private products: Product[] = [
    { name: "Hamburger", imageUrl: "/assets/images/burger.svg" },
    { name: "Pizza", imageUrl: "/assets/images/pizza.svg" },
    { name: "French Fries", imageUrl: "/assets/images/fries.svg" },
    { name: "Soda", imageUrl: "/assets/images/soda.svg" }
  ];

  /** Constructs a new products service. */
  constructor() { }

  /** Gets the array of available products. */
  public getProducts(): Product[] {
    return this.products;
  }
}
