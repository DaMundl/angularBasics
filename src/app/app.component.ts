import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
  `<h1>{{title}}</h1>
  <img bind-src="imageUrl"/>
  <br>
  <input  type="text" ng-model="title" />
  You have typed: {{title}}`

})
export class AppComponent {
  title = '';
  imageUrl = 'https://placeimg.com/400/200/animals';

}
