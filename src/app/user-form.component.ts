import { User } from './user';
import { Component } from '@angular/core';


@Component ({
  selector: 'app-user-form',
  templateUrl: 'user-form.component.html'
})

export class UserFormComponent {
  countries = ['United States', 'Hongkong', 'Australia', 'Austria', 'Great Britain'];

  model = new User('', '');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
