import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, URLSearchParams, RequestOptionsArgs } from '@angular/http';
import { environment } from '../../../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Injectable()
export class Base {
  private loggedIn = false;
  public globalHeaders;
  refreshNav: EventEmitter<boolean> = new EventEmitter();

  constructor(public http: Http, private router: Router) {
    this.loggedIn = !!localStorage.getItem('auth_token');
    let authToken = localStorage.getItem('auth_token');
    this.globalHeaders = new Headers({ "Authorization": 'Bearer ' + authToken });
  }

  post(url: string, body: any, options) {
    console.log('Base Service Post');
    console.log('Base Service Post URL',url);
    console.log('Base Service Post BODY',body);
    console.log('Base Service Post OPTIONS',options);
    console.log('HTTP');
    console.dir(this.http);
    return this.http.post(url, body, { headers: options })
      .map(res => {
        let response = res.json();
        if (response.err_code == '403') {
          this.logout();
          this.router.navigate(['/login']);
          return response;
        }
        else {
          return response;
        }
      }).catch(this.handleErrors);
  }

  get(url: string, options) {
    return this.http.get(url, { headers: options })
      .map(res => {
        let response = res.json();
        if (response.err_code == '403') {
          this.logout();
          this.router.navigate(['/login']);
          return response;
        }
        else {
          return response;
        }
      }).catch(this.handleErrors);
  }

  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('authorizedUser');
    this.globalHeaders = new Headers();
    this.loggedIn = false;
    this.router.navigate(['/login']);
  }

  handleErrors(error: Response) {
    return Observable.throw(error || "Server Error");
  }

  isLoggedIn() {
    return this.loggedIn;
  }

}