import { Injectable } from '@angular/core';

import { of, throwError } from 'rxjs';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(user: User) {
    if (user.username === 'test') {
      return of({
        ...user,
        token: '1234'
      });
    }

    return throwError({
      error: {
        errors: ['Invalid user']
      }
    });
  }

  logout() {
    return of(null);
  }
}
