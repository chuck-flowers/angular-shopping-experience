import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../products.service';

@Component({
  selector: 'app-product-browser',
  templateUrl: './product-browser.component.html',
  styleUrls: ['./product-browser.component.css']
})
export class ProductBrowserComponent implements OnInit {

  /** The collection of available products. */
  public products: Product[];

  /** Creates a new product browser */
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }
}
