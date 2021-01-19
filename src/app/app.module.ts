import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BasketComponent } from './basket/basket.component';
import { BrowseProductsComponent } from './browse-products/browse-products.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SubmitOrderComponent } from './submit-order/submit-order.component';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { TokenInterceptorService } from './logging/token-interceptor.service';
import {MatSortModule} from '@angular/material/sort';
import { PodsumowanieComponent } from './podsumowanie/podsumowanie.component';
import { SposobdostawyComponent } from './sposobdostawy/sposobdostawy.component';
import { PlatnoscComponent } from './platnosc/platnosc.component';
import { DanewysylkiComponent } from './danewysylki/danewysylki.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BasketComponent,
    BrowseProductsComponent,
    SubmitOrderComponent,
    FooterComponent,
    ComplaintComponent,
    PodsumowanieComponent,
    SposobdostawyComponent,
    PlatnoscComponent,
    DanewysylkiComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSidenavModule,
    MatIconModule,
    HttpClientModule,
    MatMenuModule,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatSortModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi: true
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
