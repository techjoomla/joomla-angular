import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MycountryService } from "./mycountry.service";
import { NewArticleComponent } from './new-article/new-article.component'
import { ReactiveFormsModule } from '@angular/forms';  
@NgModule({
  declarations: [
    AppComponent,    
    NewArticleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule    
  ],
  providers: [MycountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
