import { RatingComponent } from './rating.component';
import { Component, Input } from '@angular/core';

@Component ({
  selector: 'app-product',
  template: `
  <div class="media">
  <div class="media-left">
  <a href='#'>
  <img class="media-object" bind-src="data.imageUrl">
  </a>
  </div>
  <div class="media-body">
  <div class="media-body">
    <h4 class="media-heading">
    {{data.productName}}
    </h4>
    {{data.releasedDate | date | uppercase}}
    <app-rating [rating]="data.rating"
      [numOfReviews]= "data.numOfReviews">
    </app-rating>
    Reviews: {{data.numOfReviews}}
    <div [ngSwitch]="data.rating">
      <div *ngSwitchCase="1">Poor</div>
      <div *ngSwitchCase="2">Fair</div>
      <div *ngSwitchCase="3">Average</div>
      <div *ngSwitchCase="4">Good</div>
      <div *ngSwitchCase="5">Excellent</div>
      <div *ngSwitchDefault>Not rated</div>
    </div>
    <br>
   About: {{data.description | truncate: 25}}
   </div>
  </div>
</div>`,
  styles: ['.media {margin-bottom: 20px;}']
})

export class ProductComponent {

  @Input() data;
}
