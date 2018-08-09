
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdComponent } from './ad.component';
import { ProductsComponent } from './products.component';

import { AdService } from './ad.service';
import { ProductsService } from './products.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AdComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductsService, AdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
