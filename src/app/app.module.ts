
import { TruncatePipe } from './truncate.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product.component';
import { RatingComponent } from './rating.component';
import { UserFormComponent } from './user-form.component';
import { JumbotronComponent } from './jumbotron.component';

import {FormsModule} from '@angular/forms';
import { ProductService } from './product.service';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    RatingComponent,
    ProductComponent,
    TruncatePipe,
    JumbotronComponent,
    UserFormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
