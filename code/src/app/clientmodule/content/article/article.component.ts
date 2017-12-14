import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  templateUrl: './article.component.html',
  styleUrls: []
})
export class ArticleComponent implements OnInit {

  articleData;
  articleAliass: String = '';

  constructor( private _acRoutes: ActivatedRoute ) { }

  ngOnInit() {
    this._acRoutes.params.subscribe(routeData => {
      console.log('routeDataa = ', routeData);
      this.articleAliass = routeData['article-alias'];
    });
  }

}
