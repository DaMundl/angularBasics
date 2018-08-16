import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor (private _loginService: LoginService, private _router: Router) {}

  canActivate(): boolean {
    if (!this._loginService.isLoggenIn) {
      this._router.navigate(['login']);
      return false;
    }
    return true;
  }
}
