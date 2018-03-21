import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//import { FlexLayoutModule } from "@angular/flex-layout";
import { JangularMaterial } from '../jangular.material.module';
import { UserRouterModule } from './users.router.module';

import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';


@NgModule({
  imports: [
    CommonModule,
    UserRouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    JangularMaterial
//    FlexLayoutModule
  ],
  declarations: [ProfileComponent, RegistrationComponent],
  providers : [],
  exports : [ ProfileComponent, RegistrationComponent]
})
export class UsersModule { }
