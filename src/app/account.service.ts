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
    return this.http.put(this._URL + "/" + account.id, account)
  }

  onDeleteAccount(){
    return null;
  }

  searchAccount(){
     return this.http.get<any>(this._URL);
  }




}
