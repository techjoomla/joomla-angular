import { Component, OnInit, Input } from '@angular/core';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'japp-article',
  templateUrl: './article.component.html',
  styleUrls: [],
  providers : [ ContentService ]
})
export class ArticleComponent implements OnInit {

  articleData;
  @Input()
  set articleAlias (value) {
    this.getArticle(value);
  }

  constructor( private _contentService: ContentService ) { }

  ngOnInit() {
  }

  getArticle(alias) {
          this._contentService.getArticles(alias).subscribe(articleData => {
            console.log('articlesf asdf data ', articleData);
            this.articleData = articleData;
          });
  }

}
