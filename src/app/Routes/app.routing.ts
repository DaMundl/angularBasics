import { PreventUnsavedChangesGuard } from '../prevent-unsaved-changes-guard.service';
import { LoginComponent } from '../login.component';
import { AuthGuard } from '../auth-guard.service';
import { UserFormComponent } from '../user/user-form.component';

import {Routes, RouterModule} from '@angular/router';

import {NotFoundComponent} from './notfound.component';
import { HomeComponent } from './home.component';
import { SpotifyComponent } from '../spotify/spotify.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';


 const routes: Routes = [
{path: '', component: HomeComponent, canActivate: [AuthGuard]},
{path: 'signup', component: UserFormComponent, canActivate: [AuthGuard]},
{path: 'login', component: LoginComponent, canDeactivate: [PreventUnsavedChangesGuard]},
{path: '**', component: NotFoundComponent }
];

export const  appRounting: ModuleWithProviders = RouterModule.forRoot(routes);
