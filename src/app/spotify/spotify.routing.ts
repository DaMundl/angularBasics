import { AuthGuard } from './../auth-guard.service';
import { SpotifyComponent } from './spotify.component';
import { RouterModule } from '@angular/router';


export const spotifyRouting = RouterModule.forChild([{path: 'spotify', component: SpotifyComponent, canActivate: [AuthGuard]}])
