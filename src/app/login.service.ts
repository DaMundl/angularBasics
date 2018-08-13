import {Injectable} from '@angular/core';

@Injectable()
export class LoginService {
  login(username, password) {
    if ( username === 'lukas' && password === '123') {
      return true;
    } else {
      return false;
    }
  }
}
