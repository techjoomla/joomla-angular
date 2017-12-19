import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService
{
    private headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    baseUrl = 'http://ttpllt17-php7.local/joomla-for-ng/';
    globalHeaders;

    constructor( private _httpClient : HttpClient ){

        let authToken = localStorage.getItem('auth_token');
        this.globalHeaders = new HttpHeaders({
                                "Authorization": 'Bearer ' + authToken,
                                'Content-Type': 'application/x-www-form-urlencoded'
                            });
    }

    login(credientials){
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.set('username', credientials.username);
        urlSearchParams.set('password', credientials.password);
        let body = urlSearchParams.toString();

        console.log('inside login auth', credientials);
        let loginApi = this.baseUrl + 'index.php?option=com_api&app=users&resource=login&format=raw';
        
        return this._httpClient.post(loginApi, body, {headers : this.globalHeaders});
        //return this._httpClient.get("http://ttpllt17-php7.local/joomla-for-ng/index.php?option=com_api&app=articles&resource=article&format=raw");
    }

    register(userData) {
        let userParams = new URLSearchParams();
        userParams.set('username', userData.username);
        userParams.set('name', userData.name);
        userParams.set('email', userData.emailid);
        userParams.set('password', userData.password);

        let regApi = this.baseUrl + 'index.php?option=com_api&app=users&resource=users&format=raw';

        let myBody = userParams.toString();

        return this._httpClient.post(regApi, myBody, {headers: this.headers});
    }
}