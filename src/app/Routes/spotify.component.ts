import { FormControl } from '@angular/forms';
import { JumbotronComponent } from '../jumbotron.component';
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators';
import { distinctUntilChanged } from 'rxjs/operators';
import { SpotifyService } from '../spotify.service';

@Component({
  templateUrl: 'spotify.component.html',
  styleUrls: ['spotify.component.css'],
  providers: [SpotifyService]
})

export class SpotifyComponent implements OnInit {
  searchControl = new FormControl();
  isLoading = false;
  artists = [];

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
      this.searchControl.valueChanges
      .pipe(filter(text => text.length >= 3))
      .pipe(debounceTime(400))
      .pipe(distinctUntilChanged())
      .subscribe( value => {
        this.isLoading = true;
        this.spotifyService.getSpotifyData(value).subscribe(data => {
        this.artists = data.artists.items;
        this.isLoading = false;
        console.log(data.artists.items);
      });
  });
}}
