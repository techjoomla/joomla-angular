import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from "@angular/flex-layout";
import { JangularMaterial } from '../jangular.material.module';
import { UserRouterModule } from './users.router.module';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    UserRouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    JangularMaterial,
    FlexLayoutModule
  ],
  declarations: [LoginComponent, ProfileComponent],
  providers : [],
  exports : [LoginComponent, ProfileComponent]
})
export class UsersModule { }
