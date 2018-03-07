import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Base,RegisterService } from '../services/index';
import { AlertsService } from '@jaspero/ng2-alerts';

@Component({
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  alertOptions = {
    showCloseButton: true,
    duration: 50000
  }

  constructor(private route:Router,
              private Base : Base,
              private RegisterService :RegisterService,
              private _alert : AlertsService
  ) { 
    console.log('In Login Component');
  }

  register = new FormGroup({
    firstname: new FormControl(null, [Validators.required]),
    lastname: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    username: new FormControl(null, [Validators.required]),
  });

  ngOnInit() {
  }

  onSubmit({ value, valid }) {
    if (valid) {
      let data = [];
      data['name'] = value.firstname+' '+value.lastname;
      data['email'] = value.email;
      data['username'] = value.username;
      data['password'] = value.password;
      this.createUser(data);
    }
  }

  createUser(data){
    console.log('Posted Data',data);
    this.RegisterService.createUser(data).subscribe(result => {
      console.log('User Created');
      if (result.err_msg) {
        //this.invalidLoginFormMessage = result.err_msg;
        this._alert.create("error", result.err_msg, this.alertOptions);
      }
      else{
        console.log('Registered User Successfully');
      }
    }); 
  }
}