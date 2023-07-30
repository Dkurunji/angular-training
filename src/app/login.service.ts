import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  _URL : string = 'http://localhost:3000/transactions';
  transactionItems : any = [];

  constructor(private http : HttpClient) {
  //  this.transactionItems = this.getTransactionItems();
  }  
 
  getTransactions(){
    return this.http.get<any>(this._URL);
  }

  addTransaction(item : any){
    return this.http.post<any>(this._URL, item);
  }

  add(item : any, message : any){
    //adding transactions to logged in user  
    this.addTransaction(item).subscribe(data =>{      
     alert('Transaction added successfully!!!')
   }, err =>{
     alert(message);
   })
 }
  

}
