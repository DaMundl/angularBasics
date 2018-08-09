import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
  `<h1>{{title}}</h1>
  <br>
  <input  type="text" ng-model="title" />
  You have typed: {{title}}
  <br>
  <img bind-src="imageUrl"/>
  <br>
  <br>
  <app-rating></app-rating>`

})
export class AppComponent {
  title = '';
  imageUrl = 'https://placeimg.com/400/200/animals';

}
