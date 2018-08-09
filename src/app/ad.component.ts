import { AdService } from './ad.service';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-ads',
  template:
  `<h2>Advertisements</h2>
  <ul>
  <li *ngFor="let ad of ads">
  {{ad}}
  </li>
  </ul>`
})

export class AdComponent {
  ads;

  constructor(adService: AdService) {
    this.ads = adService.getAds();
  }

}
