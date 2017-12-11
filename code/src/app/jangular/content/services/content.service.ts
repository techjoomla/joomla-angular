import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import 'rxjs';

@Injectable()
export class ContentService
{
    baseUrl = 'http://ttpllt17-php7.local/joomla-for-ng/';

    constructor( private _httpClient : HttpClient ){}

    getArticles(){
        return this._httpClient
                    .get(this.baseUrl + "index.php?option=com_api&app=articles&resource=article&format=raw")
                    .map(data => {
                        return data['data']['data'];
                    });
    }
}