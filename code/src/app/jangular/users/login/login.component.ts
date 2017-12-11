import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'japp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [ AuthService ]
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup = new FormGroup({
    username : new FormControl(),
    password : new FormControl()
  });

  constructor( private _authService : AuthService ) { }

  ngOnInit() {
  }

  login(){
    console.log(this.loginForm);
    this._authService.login(this.loginForm.value).subscribe(data => {
      console.log(data);
    });
  }

}
