import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from "../services/index";
import { Router } from '@angular/router';
import { AlertsService } from '@jaspero/ng2-alerts';


@Component({
  selector: 'japp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLoginFormMessage: any;
  isLoginFormValid: boolean = true;
  busy1;

  alertOptions = {
    showCloseButton: true,
    duration: 50000
  }

  constructor(private router: Router, 
              private LoginService : LoginService,
              private _alert: AlertsService
  ) { 
    console.log('In Login Component');
  }

  ngOnInit() {
    if (this.LoginService.isLoggedIn()) {
      // Get the logged in user details
      this.router.navigate(['/profile']);
    }
    else {
      this.LoginService.logout();
      this.LoginService.refreshNav.emit();
    } 
  }

  login = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  onSubmit({ value, valid }) {
    if (valid) {
      var username = value.username;
      var password = value.password;
      this.getLoginKey(username, password)
    }
  }

  getLoginKey(user, pass) {
    this.busy1 = this.LoginService.getAuthenticationKey(user, pass)
    .subscribe(result => {
      if (result.err_msg) {
        this.isLoginFormValid = false;
        this.invalidLoginFormMessage = result.err_msg;
        this._alert.create("error", this.invalidLoginFormMessage, this.alertOptions);
      }
      else {
        if (result.data.auth) {
          // Get the agency details and store in to local storage
          localStorage.setItem('auth_token', result.data.auth);
          this._alert.create("info", "You are logged in successfully redirecting....", this.alertOptions);
          this.LoginService.loggedIn = true;
          this.LoginService.getUserDetails(result.data.id)
            .subscribe(data => {
              if (data.err_msg) {
                this._alert.create("error", data.err_msg, this.alertOptions);
              }
              else {
                localStorage.setItem('authorizedUser', JSON.stringify(data.data));
                this.LoginService.refreshNav.emit();
                this.router.navigate(['/profile']);
              }
            });
        }
      }
    });
  }
}