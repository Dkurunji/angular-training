import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  _URL : string = 'http://localhost:3000/accounts';

  constructor(private http: HttpClient) { }

  createNewAccount(account : any){
    return this.http.post(this._URL, account);      
  }

  onUpdateAccount(account : any){
    return this.http.put<any>(this._URL + "/" + account.id, account)
  }

  onDeleteAccount(account : any){
    return this.http.delete<any>(this._URL + "/" + account.id)
  }

  searchAccount(){
     return this.http.get<any[]>(this._URL);
  }

  depositMoney(acc : any){
    return this.http.put<any>(this._URL+"/"+acc.id, acc)
  }

  withdrawMoney(acc : any){
    return this.http.put<any>(this._URL+"/"+acc.id, acc)
  }




}
