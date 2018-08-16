import { CanActivate, Router } from '@angular/router';
import {Injectable} from '@angular/core';


@Injectable()
export class LoginService {
  isLoggenIn = false;

  login(username, password) {
    if ( username === 'lukas' && password === '123') {
      this.isLoggenIn = true;
      console.log('login successful');
    } else {
      this.isLoggenIn = false;
      console.log('login failed');
    }
    return this.isLoggenIn;
  }

  logout() {
    this.isLoggenIn = false;
    return this.isLoggenIn;
  }
}
