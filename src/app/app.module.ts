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
import { JumbotronComponent } from './jumbotron.component';
import { LoginComponent } from './login.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HttpModule } from '@angular/http';
import { NotFoundComponent } from './Routes/notfound.component';
import { HomeComponent } from './Routes/home.component';
import { AuthGuard } from './auth-guard.service';
import { SpotifyModule } from './spotify/spotify.module';
import { UserModule } from './user/user.module';
import { spotifyRouting } from './spotify/spotify.routing';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    RatingComponent,
    ProductComponent,
    TruncatePipe,
    JumbotronComponent,
    LoginComponent,
    NotFoundComponent,
    HomeComponent,
  ],
  imports: [
    appRounting,
    spotifyRouting,
    SpotifyModule,
    UserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpModule
  ],
  providers: [LoginService, AuthGuard, PreventUnsavedChangesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
