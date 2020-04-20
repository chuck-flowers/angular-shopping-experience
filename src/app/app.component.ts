import { Component, ViewChild } from '@angular/core';
import { CartService } from './cart.service';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public cartService: CartService) { }

  public isSelectionMade(): boolean {
    return this.cartService.containsItems();
  }
}
