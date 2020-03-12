import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  get token() {
    return localStorage.getItem('jwtToken');
  }

  set token(value: string) {
    localStorage.setItem('jwtToken', value);
  }
}
