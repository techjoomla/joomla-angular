import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'profile',      component: ProfileComponent }
]

@NgModule({
    imports : [RouterModule.forChild(appRoutes)],
    exports : [RouterModule]
})
export class UserRouterModule{
}