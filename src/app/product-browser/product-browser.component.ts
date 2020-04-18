import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../products.service';

@Component({
  selector: 'app-product-browser',
  templateUrl: './product-browser.component.html',
  styleUrls: ['./product-browser.component.css']
})
export class ProductBrowserComponent implements OnInit {

  public products: Product[];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }
}
