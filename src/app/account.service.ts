import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  _URL : string = 'http://localhost:3000/accounts';

  constructor(private http: HttpClient) { }

  createNewAccount(account : any){
    this.http.post(this._URL, account)
      .subscribe(data =>{
        alert('Account Created Successfully');
      }, err =>{
        alert('Something gone wrong while creating account!!')
      })
  }




}
