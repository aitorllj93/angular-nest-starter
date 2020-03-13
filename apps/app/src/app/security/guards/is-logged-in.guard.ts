
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { LoginMachine } from '../machines/login/login-machine.service';
import { LOGIN_MACHINE_STATES } from '../machines/login/login-machine.schema';

@Injectable({
  providedIn: 'root',
})
export class IsLoggedInGuard implements CanActivate {

  constructor(
    private machine: LoginMachine,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.machine.service.state.value === LOGIN_MACHINE_STATES.LOGGED_IN) {
      return true;
    }

    this.router.navigate(['auth']);

    return false;
  }
}
