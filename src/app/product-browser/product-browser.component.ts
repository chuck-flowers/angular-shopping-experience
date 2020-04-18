import { Component, OnInit } from '@angular/core';

class Product {
  name: string
}

@Component({
  selector: 'app-product-browser',
  templateUrl: './product-browser.component.html',
  styleUrls: ['./product-browser.component.css']
})
export class ProductBrowserComponent implements OnInit {

  products: Product[];

  constructor() { }

  ngOnInit(): void {
  }
}
