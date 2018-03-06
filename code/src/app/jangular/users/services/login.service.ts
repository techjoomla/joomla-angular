import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { environment } from '../../../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { Base } from './base.service';

@Injectable()
export class LoginService {
  public loggedIn = false;
  public headers: Headers;
  refreshNav: EventEmitter<boolean> = new EventEmitter();

  constructor(private BaseService: Base) { 
    console.log('Here in login service');
  }

  getAuthenticationKey(username, password) {
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.set('username', username);
    urlSearchParams.set('password', password);
    let body = urlSearchParams.toString();
    this.BaseService.globalHeaders.set("Content-Type", "application/x-www-form-urlencoded");
    return this.BaseService.post(environment.apiBase + '/api/users/login', body, this.BaseService.globalHeaders).map(result => {
      if (result.err_msg) {
        this.BaseService.logout();
        return result;
      }
      else {
        console.log(result);
        if (result.data.auth) {
          localStorage.setItem('auth_token', result.data.auth);
          this.BaseService.globalHeaders.set("Authorization", 'Bearer ' + result.data.auth);
          return result;
        }
      }
    });
  }

  getUserDetails(userId = 0) {
    this.BaseService.globalHeaders.delete("Content-Type");
    return this.BaseService.get(environment.apiBase + '/api/users/users/' + userId, this.BaseService.globalHeaders).map(res => res);
  }

  logout() {
    return this.BaseService.logout();
  }

  isLoggedIn() {
    return this.BaseService.isLoggedIn();
  }
}