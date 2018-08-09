import { JumbotronComponent } from './jumbotron.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
  `
  <app-jumbotron>
    <div class="heading">
    {{title}}
    </div>
      <div class="body">
        This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
      </div>
    <div class="button">Learn More</div>
  </app-jumbotron>
  <app-products></app-products>
  `
})
export class AppComponent {
  title = 'Fake Amazon';

}
