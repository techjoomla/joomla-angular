import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { LoginComponent } from './login/login.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';

const appRoutes: Routes = [
  { path: '', component: ArticlesComponent },
  { path: 'article/:article-alias', component: ArticleComponent }
];

@NgModule({
    imports : [RouterModule.forChild(appRoutes)],
    exports : [RouterModule]
})
// tslint:disable-next-line:one-line
export class ContentRouterModule
{
}
