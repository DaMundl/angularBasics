import { JumbotronComponent } from './jumbotron.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
  `
  <app-login></app-login>
  `
})
export class AppComponent {
  title = 'Fake Amazon';

}
