import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JAngularBaseService } from '../../services/jangularbase.service';

@Injectable()
export class AuthService
{
    private headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    private globalHeaders;

    constructor( private _httpClient: HttpClient, private _jAppBaseService: JAngularBaseService){

        let authToken       = localStorage.getItem('auth_token');
        this.globalHeaders  = new HttpHeaders({
                                "Authorization": 'Bearer ',
                                'Content-Type': 'application/x-www-form-urlencoded'
                            });
    }

    isLoggedIn(){
        return false;
    }

    login(credientials){
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.set('username', credientials.username);
        urlSearchParams.set('password', credientials.password);
        let body = urlSearchParams.toString();

        console.log('inside login auth', credientials);
        let loginApi = 'index.php?option=com_api&app=users&resource=login&format=raw';

        return this._jAppBaseService
                    .post(loginApi, body, this.globalHeaders)
                    .map(response => {
                        if(!response['err_code'] && response['data']['auth'])
                        {
                            localStorage.setItem('authToken', response['data']['auth']);
                            localStorage.setItem('userId', response['data']['id']);
                            return true;
                        }

                        return false;
                    });
    }

    register(userData) {
        let userParams = new URLSearchParams();
        userParams.set('username', userData.username);
        userParams.set('name', userData.name);
        userParams.set('email', userData.emailid);
        userParams.set('password', userData.password);

        let regApi = 'index.php?option=com_api&app=users&resource=users&format=raw';

        let myBody = userParams.toString();

        return this._jAppBaseService.post(regApi, myBody, this.headers);
    }
}