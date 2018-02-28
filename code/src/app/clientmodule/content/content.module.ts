import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { JangularModule } from '../../jangular/jangular.module';

import { ContentRouterModule } from './content.router.module';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  imports: [
    CommonModule,
    ContentRouterModule,
    JangularModule
  ],
  declarations: [ArticlesComponent, ArticleComponent],
  exports : [ContentRouterModule]
})
export class ContentModule { }
