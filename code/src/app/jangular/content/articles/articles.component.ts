import { Component, OnInit } from '@angular/core';

import { ContentService } from '../services/content.service';

@Component({
  selector: 'japp-articles',
  templateUrl: './articles.component.html',
  styleUrls: [],
  providers : [ ContentService ]
})
export class ArticlesComponent implements OnInit {

  articlesData;

  constructor( private _contentService : ContentService ) { }

  ngOnInit() {
      this._contentService.getArticles().subscribe(articlesData => {
        console.log("articles data ", articlesData);
        this.articlesData = articlesData;
      })
  }

}
