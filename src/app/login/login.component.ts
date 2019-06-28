import { Component, OnInit } from '@angular/core';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mainObject: Login;

  constructor() { }

  ngOnInit() {
    this.mainObject = new Login();
  }

  onSubmit(mainObject) {
    
  }

}
