import { Component, ViewChild } from '@angular/core';
import { CartService, CartItem } from '../cart.service';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent {
  public readonly displayedColumns = [
    'quantity',
    'product',
    'price',
    'subtotal'
  ];

  @ViewChild('summaryTable')
  private summaryTable: MatTable<CartItem>;

  constructor(public cartService: CartService) {
    cartService.contentObserver.subscribe(_ => this.summaryTable.renderRows());
  }
}
