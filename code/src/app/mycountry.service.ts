import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http'
@Injectable()
export class MycountryService {
  constructor(private http : Http) { }

  getCat(){
    let url = 'https://hackathondemo.cloudaccess.host/index.php?option=com_api&app=categories&resource=categories&format=raw&lang=en&key=d5d2e3fa64391f11b57a2d16ad67da33';
    return this.http.get(url); 
  }

  postArticle(url, data){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, data, {
      headers: headers
    }).subscribe(data => {
      if (data.json().data.success)
        alert('Article created Successfully');
    });
  }

}
