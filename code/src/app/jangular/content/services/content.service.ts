import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../../src/environments/environment';

import 'rxjs';

@Injectable()
export class ContentService {
    baseUrl = environment['apiBase'];

    constructor( private _httpClient: HttpClient ) { }

    getArticles(articleAlias, categoryId?, featured?, status? ) {
        let articleGetUrl = 'index.php?option=com_api&app=articles&resource=article&format=raw';
        articleGetUrl = articleAlias ? articleGetUrl + '&article_alias=' + articleAlias : articleGetUrl;
        articleGetUrl = categoryId ? articleGetUrl + '&category_id=' + categoryId : articleGetUrl;
        articleGetUrl = featured ? articleGetUrl + '&featured=true' : articleGetUrl;
        articleGetUrl = status === 'archive' ? articleGetUrl + '&status=archive' : articleGetUrl;

        return this._httpClient
                    .get(this.baseUrl + articleGetUrl)
                    .map(data => {

                        if (articleAlias) {
                          return data['data']['data']['results'][0];
                        }

                        return data['data']['data'];
                    });
    }

}
