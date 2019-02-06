import { Component, OnInit } from '@angular/core';
import {HardcodedAuthentificationService} from '../service/hardcoded-authentification.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // isUserLoggedIn = false;
  constructor(private hardcodedAuthentificationServic
                : HardcodedAuthentificationService) { }

  ngOnInit() {
  //  this.isUserLoggedIn = this.hardcodedAuthentificationServic.isUserLoggedIn();
  }

}
