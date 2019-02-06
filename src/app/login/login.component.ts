import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'yosra';
  password = '';
  errorMessage = 'Invalide Credentials';
  invalidLogin = false;

  // Router
  //  Angular.giveMeRouter
  // Dependency injection

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogine() {
  //  console.log(this.username);
    if (this.username === 'yosra' && this.password === 'riabi') {
      // Redirect to welcome page
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}
