import { Injectable } from '@angular/core';

import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: User = null;
  isAuthenticated = false;

  private _state$ = new BehaviorSubject<{
    currentUser: User;
    isAuthenticated: boolean;
  }>({
    currentUser: this.currentUser,
    isAuthenticated: this.isAuthenticated
  });

  state$ = this._state$.asObservable();
  currentUser$ = this.state$.pipe(
    map(state => state.currentUser)
  );
  isAuthenticated$ = this.state$.pipe(
    map(state => state.isAuthenticated)
  )

  authenticate(user: User) {
    this.currentUser = user;
    this.isAuthenticated = true;
    this.triggerStateChange();
  }

  revoke() {
    this.currentUser = null;
    this.isAuthenticated = false;
    this.triggerStateChange();
  }

  private triggerStateChange() {
    this._state$.next({
      currentUser: this.currentUser,
      isAuthenticated: this.isAuthenticated
    })
  }
}
