import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { environment } from '../../../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { Base } from "../services/index";

@Injectable()
export class RegisterService {
  public headers: Headers;
  refreshNav: EventEmitter<boolean> = new EventEmitter();

  constructor(private BaseService: Base) { 
    console.log('Here in login service');
  }

  createUser(data) {
    console.log('In Register Service', data);
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.set('username', data['username']);
    urlSearchParams.set('name', data['name']);
    urlSearchParams.set('email', data['email']);
    urlSearchParams.set('password', data['password']);
    let body = urlSearchParams.toString();
    this.BaseService.globalHeaders.set("Content-Type", "application/x-www-form-urlencoded");
    return this.BaseService.post(environment.apiBase + '/api/users/users', body, this.BaseService.globalHeaders).map(result => {
      if (result.err_msg) {
        console.log('Error Here',result);
        //this.BaseService.logout();
        return result;
      }
      else {
        if (result) {
          console.log('Success Here in',result);
          return result;
        }
      }
    });
  }
}