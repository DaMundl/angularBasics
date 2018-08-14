import { LoginService } from './login.service';

import { TruncatePipe } from './truncate.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product.component';
import { RatingComponent } from './rating.component';
import { UserFormComponent } from './user-form.component';
import { JumbotronComponent } from './jumbotron.component';
import { LoginComponent } from './login.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductService } from './product.service';
import { SpotifyService } from './spotify.service';
import { HttpModule } from '../../node_modules/@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    RatingComponent,
    ProductComponent,
    TruncatePipe,
    JumbotronComponent,
    UserFormComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpModule
  ],
  providers: [LoginService, SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
