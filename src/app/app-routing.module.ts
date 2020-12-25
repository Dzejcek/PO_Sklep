import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { BrowseProductsComponent } from './browse-products/browse-products.component';

const routes: Routes = [
{path: "offer", component: BrowseProductsComponent},
{path: "basket", component: BasketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
