import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseProductsComponent } from './browse-products/browse-products.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { SubmitOrderComponent } from './submit-order/submit-order.component';

const routes: Routes = [
{ path: '', redirectTo: '/offer', pathMatch: 'full' },
{path: 'offer/:cat', component: BrowseProductsComponent},
{path: "basket", component: SubmitOrderComponent},
{path: "complaint", component: ComplaintComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
