import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  inputs: ["name", "imageUrl"]
})
export class ProductCardComponent implements OnInit {

  public name: string;

  public imageUrl: string;

  constructor() { }

  ngOnInit(): void {
  }

}
