import { Component, OnInit } from '@angular/core';


@Component({
  templateUrl: './articles.component.html',
  styleUrls: []
})
export class ArticlesComponent implements OnInit {

  articlesData;
  check = 0;

  constructor( ) { }

  ngOnInit() {
  }

}
