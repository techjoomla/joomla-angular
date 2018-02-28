import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JAngularBaseService } from './jangularbase.service';

@Injectable()
export class MenuService {

    constructor(private _httpClient: HttpClient, private _jAppBaseService: JAngularBaseService) {}

    getMenus($menutype?, $component?) {
        let $url = 'index.php?option=com_api&app=menu&resource=menus&format=raw';

        if ($menutype) {
            $url += '&menutype=' + $menutype;
        }

        if ($component) {
            $url += '&component=' + $component;
        }

        return this._jAppBaseService.get($url);
    }
}
