import { FormControl } from '@angular/forms';
import { JumbotronComponent } from './jumbotron.component';
import { Component } from '@angular/core';
import { filter } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators';
import { distinctUntilChanged } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  template:
  `
  <input class="form-control" type="search" [formControl]="searchControl">

  `
})
export class AppComponent {
  searchControl = new FormControl();

  constructor() {
    this.searchControl.valueChanges
    .pipe(filter(text => text.length >= 3))
    .pipe(debounceTime(400))
    .pipe(distinctUntilChanged())
    .subscribe( value => { console.log(value);
    });
  }


}
