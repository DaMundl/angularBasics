import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';
import { appRounting } from './Routes/app.routing';
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
import { HttpModule } from '@angular/http';
import { NotFoundComponent } from './Routes/notfound.component';
import { HomeComponent } from './Routes/home.component';
import { SpotifyComponent } from './Routes/spotify.component';
import { AuthGuard } from './auth-guard.service';




@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    RatingComponent,
    ProductComponent,
    TruncatePipe,
    JumbotronComponent,
    UserFormComponent,
    LoginComponent,
    NotFoundComponent,
    HomeComponent,
    SpotifyComponent

  ],
  imports: [
    appRounting,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpModule
  ],
  providers: [LoginService, AuthGuard, PreventUnsavedChangesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
