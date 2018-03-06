import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {UsersModule} from './users/users.module';
import { ContentModule } from './content/content.module';

import { JAngularBaseService } from './services/jangularbase.service';
export { MenuService } from './services/menu.service';


@NgModule({
  imports: [
    CommonModule,
    UsersModule,
    ContentModule, 
    HttpModule
  ],
  declarations: [],
  providers: [JAngularBaseService],
  exports : [UsersModule, ContentModule]
})
export class JangularModule { }
