import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { LoginComponent } from './login/login.component';
import { ArticlesComponent } from './articles/articles.component';

const appRoutes: Routes = [
  { path: '', component: ArticlesComponent },
//   { path: 'profile',      component: ProfileComponent }
]

@NgModule({
    imports : [RouterModule.forChild(appRoutes)],
    exports : [RouterModule]
})
export class ContentRouterModule{
}