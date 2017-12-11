import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JangularMaterial } from '../jangular.material.module';

import { ContentRouterModule } from './content.router.module';
import { ArticlesComponent } from './articles/articles.component';

@NgModule({
  imports: [
    CommonModule,
    JangularMaterial,
    ContentRouterModule
  ],
  declarations: [ArticlesComponent],
  exports : [ContentRouterModule]
})
export class ContentModule { }
