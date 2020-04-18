import { Component, OnInit } from '@angular/core';

class Product {
  name: string;
  imageUrl: string;
}

@Component({
  selector: 'app-product-browser',
  templateUrl: './product-browser.component.html',
  styleUrls: ['./product-browser.component.css']
})
export class ProductBrowserComponent implements OnInit {

  public products: Product[];

  constructor() { }

  ngOnInit(): void {
    console.log("ProductBrowserComponent.ngOnInit()");
  }
}
