import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../src/environments/environment';

@Injectable()
export class MenuService {

    baseUrl = environment.apiBase; // = 'http://ttpllt17-php7.local/localOsian/';

    constructor(private _httpClient: HttpClient) {}

    getMenus($menutype?, $component?) {
        let $url = this.baseUrl + 'index.php?option=com_api&app=menu&resource=menus&format=raw';

        if ($menutype) {
            $url += '&menutype=' + $menutype;
        }

        if ($component) {
            $url += '&component=' + $component;
        }

        return this._httpClient.get($url);
    }
}
