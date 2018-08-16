import { SpotifyComponent } from './spotify.component';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SpotifyService } from './spotify.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule
  ],
  declarations: [SpotifyComponent],
  providers: [SpotifyService]
})

export class SpotifyModule {}
