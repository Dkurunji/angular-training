import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-currency-converter-dashboard',
  templateUrl: './currency-converter-dashboard.component.html',
  styleUrls: ['./currency-converter-dashboard.component.css']
})
export class CurrencyConverterDashboardComponent {

  _URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json';
  

  countries = {};

  fromAmount = 1;
  fromCountry='usd';
  fromCountry_prev='usd';

  toAmount = 1;
  toCountry = 'inr';
  toCountry_prev = 'inr';
  

  constructor(private http : HttpClient){}

  ngOnInit(){
    this.http.get(this._URL).subscribe(data =>{
      this.countries = data;
      console.log(this.countries);
    })
  }

  exchangeCurrency(){
    console.log(this.fromAmount, this.fromCountry);
    console.log(this.toAmount, this.toCountry);

    this.http.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${this.fromCountry}/${this.toCountry}.json`).subscribe(data =>{
      let rates = JSON.stringify(data);
      let item = JSON.parse(rates);
      
      console.log(item.date, item[this.toCountry] * this.fromAmount);
      this.toAmount = Number((item[this.toCountry] * this.fromAmount).toFixed(3));
      // this.toAmount = Number(data.inr)
    })
  }

  topChange(){
    if(this.fromCountry==this.toCountry){
      this.toCountry = this.fromCountry_prev;
    }
    this.exchangeCurrency();
    this.fromCountry_prev = this.fromCountry;
    this.toCountry_prev = this.toCountry;

  }

  bottomChange(){
    if(this.fromCountry==this.toCountry){
      this.fromCountry = this.toCountry_prev;
    }
    this.exchangeCurrency();
    this.fromCountry_prev = this.fromCountry;
    this.toCountry_prev = this.toCountry;
  }

}
