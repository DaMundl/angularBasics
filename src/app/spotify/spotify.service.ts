import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class SpotifyService {
  constructor (private http: Http) { }

  getSpotifyData(value: Observable<any>) {
    value = this.http.get('https://api.spotify.com/v1/search').pipe(map( res => res.json()));
    return value;
  }
}
