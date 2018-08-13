import { LoginService } from './login.service';
import { PasswordValidator } from './passwordValidator';
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators, NgModel, ReactiveFormsModule} from '@angular/forms';



@Component ({
  selector: 'app-login',
  templateUrl: 'login.component.html',
})

export class LoginComponent {
  form: FormGroup;

    constructor(formBuilder: FormBuilder, private loginService: LoginService) {
      this.form = formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.compose([Validators.required, PasswordValidator.cannotContainSpace])]
      });
    }

  login() {
    const result = this.loginService.login(this.form.controls['username'].value, this.form.controls['password'].value);

    if (!result) {
      this.form.controls['password'].setErrors({
        invalidLogin: true
      });
    }
  }
}
