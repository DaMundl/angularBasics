import { PreventUnsavedChangesGuard } from './../prevent-unsaved-changes-guard.service';
import { LoginComponent } from './../login.component';
import { AuthGuard } from './../auth-guard.service';
import { UserFormComponent } from './../user-form.component';

import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {NotFoundComponent} from './notfound.component';
import { HomeComponent } from './home.component';
import { SpotifyComponent } from './spotify.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';


 const routes: Routes = [
{path: '', component: HomeComponent, canActivate: [AuthGuard]},
{path: '**', component: NotFoundComponent },
{path: 'spotify', component: SpotifyComponent, canActivate: [AuthGuard]},
{path: 'signup', component: UserFormComponent, canActivate: [AuthGuard]},
{path: 'login', component: LoginComponent, canDeactivate: [PreventUnsavedChangesGuard]}
];

// @NgModule({
//   imports: [ RouterModule.forRoot(routes)],
//   exports: [ RouterModule ]
// })
export const  appRounting: ModuleWithProviders = RouterModule.forRoot(routes);
