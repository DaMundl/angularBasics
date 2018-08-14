import { UserFormComponent } from './../user-form.component';

import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {NotFoundComponent} from './notfound.component';
import { HomeComponent } from './home.component';
import { SpotifyComponent } from './spotify.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: '**', component: NotFoundComponent},
{path: 'spotify', component: SpotifyComponent},
{path: 'signup', component: UserFormComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRouting {}

