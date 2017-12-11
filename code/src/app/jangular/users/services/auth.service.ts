import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService
{
    baseUrl = 'http://ttpllt17-php7.local/joomla-for-ng/';
    globalHeaders;

    constructor( private _httpClient : HttpClient ){

        let authToken = localStorage.getItem('auth_token');
        this.globalHeaders = new Headers({ "Authorization": 'Bearer ' + authToken });


    }

    login(credientials){

        let urlSearchParams = new URLSearchParams();
        urlSearchParams.set('username', credientials.username);
        urlSearchParams.set('password', credientials.password);
        let body = urlSearchParams.toString();


        console.log('inside login auth', credientials);
        let loginApi = this.baseUrl + 'index.php?option=com_api&app=users&resource=login&key=3f1436e2954f8ea8f71aa80a70182a25';
        let loginApii = this.baseUrl + 'api/users/login';
        
        return this._httpClient.post(loginApi, body, this.globalHeaders);
        //return this._httpClient.get("http://ttpllt17-php7.local/joomla-for-ng/index.php?option=com_api&app=articles&resource=article&format=raw");
    }
}