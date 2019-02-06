import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthentificationService {

  constructor() { }

  authenticate(username, password) {
    console.log('before ' + this.isUserLoggedIn());
    if (username === 'yosra' && password === 'riabi') {
      sessionStorage.setItem('authentificaterUser', username);
      console.log('after ' + this.isUserLoggedIn());
      return true;
    } else { return false; }
  }

  isUserLoggedIn() {
   const user = sessionStorage.getItem('authentificaterUser');
   return !(user === null);
  }
}
