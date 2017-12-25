import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../../src/environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class JAngularBaseService {

    private loggedIn    = false;
    private baseUrl     = environment.apiBase;
    private authToken;
    public  globalHeaders;

    constructor (private _httpClient: HttpClient, private router: Router) {
        this.authToken = localStorage.getItem('authToken');
        this.loggedIn = !!this.authToken;
        this.globalHeaders = new HttpHeaders({
                                        "Content-Type": 'application/x-www-form-urlencoded'
                                    });
    }

    get(url: string, options?) {

        if(this.authToken)
        {
            url += '&key=' + this.authToken;
        }

        return this._httpClient.get( this.baseUrl + url, {headers : this.globalHeaders})
                    .map(response => {
                        if (response['err_code'] === 403) {
                            this.logout();
                            return response;
                        }
                        else {
                            return response;
                        }
                    }).catch(this.handleErrors);
    }

    post(url: string, body: any, options) {
        return this._httpClient.post(this.baseUrl + url, body, { headers: options })
                        .map(response => {
                            if (response['err_code'] === 403) {
                                this.logout();
                                return response;
                            }
                            else {
                                return response;
                            }
                        }).catch(this.handleErrors);
    }

    logout() {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userId');
        this.globalHeaders = new Headers();
        this.loggedIn = false;
    }

    handleErrors(error: Response) {
        return Observable.throw(error || "Server Error");
    }
}