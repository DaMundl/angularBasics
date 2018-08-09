


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product.component';
import { RatingComponent } from './rating.component';

import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    RatingComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
