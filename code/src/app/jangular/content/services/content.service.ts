import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { JAngularBaseService } from '../../services/jangularbase.service';

import { environment } from '../../../../../src/environments/environment';

import 'rxjs';

@Injectable()
export class ContentService {
    baseUrl = environment['apiBase'];

    constructor( private _httpClient: HttpClient, private _jAppBaseService: JAngularBaseService) { }

    getArticles(articleAlias, categoryId?, featured?, status?, articleId?) {
        let articleGetUrl = 'index.php?option=com_api&app=articles&resource=article&format=raw';
        articleGetUrl = articleAlias ? articleGetUrl + '&article_alias=' + articleAlias : articleGetUrl;
        articleGetUrl = categoryId ? articleGetUrl + '&category_id=' + categoryId : articleGetUrl;
        articleGetUrl = featured ? articleGetUrl + '&featured=1' : articleGetUrl;
        articleGetUrl = status === 'archive' ? articleGetUrl + '&status=archive' : articleGetUrl;
        articleGetUrl = articleId ? articleGetUrl + '&id=' + articleId : articleGetUrl;

        return this._jAppBaseService
                    .get(articleGetUrl)
                    .map(data => {

                        if (articleAlias || articleId) {
                          return data['data']['data']['results'][0];
                        }

                        return data['data']['data'];
                    });
    }

}
