import { Component, OnInit, Input } from '@angular/core';

import { ContentService } from '../services/content.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'japp-articles',
  templateUrl: './articles.component.html',
  styleUrls: [],
  providers : [ ContentService ]
})
export class ArticlesComponent implements OnInit {

  articlesData;
  @Input() categoryId;
  @Input() featured;
  @Input() status;

  constructor( private _contentService: ContentService ) { }

  ngOnInit() {
      this._contentService.getArticles('', this.categoryId, this.featured, this.status).subscribe(articlesData => {
        console.log('articles data ', articlesData);
        this.articlesData = articlesData;

      });
  }

  postNewDummyArticle() {
    console.log('chekcing inside asjfklasjdf');
  }

}
