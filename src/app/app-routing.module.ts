import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductBrowserComponent } from './product-browser/product-browser.component';

const routes: Routes = [
  { path: '', component: ProductBrowserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
