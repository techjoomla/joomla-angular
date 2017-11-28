import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MycountryService } from '../mycountry.service';
@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {
  articleForm: FormGroup;
  categories;

  constructor(private fb: FormBuilder, private mydata: MycountryService, private http: Http) {
    this.articleForm = this.fb.group({
      title: ['', Validators.required],
      introtext: ['', Validators.required],
      fulltext: '',
      cat: ['', Validators.required],
      publishup: '',
      publishdown: ''
    });

    this.getArticle();
  }

  getArticle() {
  this.mydata.getCat().subscribe(data => {
      this.categories = data.json().data;
   });
  }

  onSubmit() {
    if (!this.articleForm.value.title)
      alert('Please enter the article title');
    else if (!this.articleForm.value.introtext)
      alert('Please enter the Into test');
    else if (!this.articleForm.value.cat)
      alert('Please select category');
    else {
      let url = 'https://hackathondemo.cloudaccess.host/index.php?option=com_api&app=articles&resource=article&key=d5d2e3fa64391f11b57a2d16ad67da33&format=raw';
      let data = '&title=' + this.articleForm.value.title + '&introtext=' + this.articleForm.value.introtext + '&fulltext=' + this.articleForm.value.fulltext + '&state=1&catid=' + this.articleForm.value.cat + '&publish_up=' +  this.articleForm.value.publishup + '&publish_down=' +  this.articleForm.value.publishdown;
      this.mydata.postArticle(url, data);
    }
  }

  ngOnInit() {
  }

}
