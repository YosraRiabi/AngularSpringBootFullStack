import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthentificationService {

  constructor() { }

  authenticate(username, password) {
    if (username === 'yosra' && password === 'riabi') {
      return true;
    } else { return false; }
  }
}
