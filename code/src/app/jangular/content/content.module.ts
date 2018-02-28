import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JangularMaterial } from '../jangular.material.module';

import { ContentRouterModule } from './content.router.module';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    JangularMaterial,
    ContentRouterModule
  ],
  declarations: [ArticlesComponent, ArticleComponent, MenuComponent],
  exports : [ContentRouterModule, ArticlesComponent, ArticleComponent, MenuComponent]
})
export class ContentModule { }
