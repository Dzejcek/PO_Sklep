import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseProductsComponent } from './browse-products/browse-products.component';
import { SubmitOrderComponent } from './submit-order/submit-order.component';

const routes: Routes = [
{path: "offer", component: BrowseProductsComponent},
{path: "basket", component: SubmitOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
