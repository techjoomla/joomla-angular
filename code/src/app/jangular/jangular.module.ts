import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {UsersModule} from './users/users.module';
import { ContentModule } from './content/content.module';

@NgModule({
  imports: [
    CommonModule,
    UsersModule,
    ContentModule
  ],
  declarations: [],
  exports : [UsersModule, ContentModule]
})
export class JangularModule { }
