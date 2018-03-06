import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'japp-loginn',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup = new FormGroup({
    username : new FormControl(),
    password : new FormControl()
  });

  constructor( ) { }

  ngOnInit() {
  }

}
