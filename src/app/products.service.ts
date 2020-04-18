import { Injectable } from '@angular/core';

export class Product {
  name: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = [
    { name: "Hamburger", imageUrl: "" },
    { name: "Pizza", imageUrl: "" },
    { name: "French Fries", imageUrl: "" },
    { name: "Soda", imageUrl: "" }
  ];

  constructor() { }

  public getProducts(): Product[] {
    return this.products;
  }
}
