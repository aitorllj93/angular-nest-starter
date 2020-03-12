import { Injectable } from '@angular/core';

import { of } from 'rxjs';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(user: User) {
    return of(user);
  }

  revoke() {
    return of(null);
  }
}
