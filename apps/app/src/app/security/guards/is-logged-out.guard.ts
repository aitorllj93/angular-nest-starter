
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { LoginMachine } from '../machines/login/login-machine.service';
import { LOGIN_MACHINE_STATES } from '../machines/login/login-machine.schema';

@Injectable({
  providedIn: 'root',
})
export class IsLoggedOutGuard implements CanActivate {

  constructor(
    private machine: LoginMachine,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.machine.state$.pipe(
      map((machineState) => machineState.value === LOGIN_MACHINE_STATES.LOGGED_OUT),
      tap(isLogged => isLogged ? null : this.router.navigate(['']))
    );
  }
}
