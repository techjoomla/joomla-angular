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
    if(value)
      this.getArticle(value);
  }

  @Input()
  set articleId (value) {
    if(value)
      this.getArticle('', value);
  }

  constructor( private _contentService: ContentService ) { }

  ngOnInit() {
  }

  getArticle(alias, id?) {
          this._contentService.getArticles(alias, '', '', '', id).subscribe(articleData => {
            this.articleData = articleData;
          });
  }

}
