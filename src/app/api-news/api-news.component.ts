import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-api-news',
  templateUrl: './api-news.component.html',
  styleUrls: ['./api-news.component.css']
})
export class ApiNewsComponent {

  constructor(private http:HttpClient){}

  _URL :string = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=04d5c696341a4f158911e452116654a0';
    news : any = '';
    trunatedRandom  = 0;


    ngOnInit(){
      this.hitAPI();
    }

  hitAPI(){
    this.http.get<any>(this._URL)
    .subscribe(data =>{
      this.news = data.articles;

      this.trunatedRandom = Math.trunc(this.news.length * Math.random()) + 1;
    
    }, err =>{
      alert('somethin gone wrong');
    })
  }
}
