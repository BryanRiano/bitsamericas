import { Component, OnInit } from '@angular/core';
import { Login } from './login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mainObject: Login;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.mainObject = new Login();
  }

  onSubmit(mainObject: Login) {
    this.loginService.login(mainObject).subscribe(operationResult => {

    });
  }

}
