import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  _URL : string = 'http://localhost:3000/loginUsers';

  constructor(private http : HttpClient) { }

  getTransactions(){
    return this.http.get<any>(this._URL);
  }

  addTransaction(item : any){
    return this.http.put<any>(this._URL+"/"+item.id, item);
  }

}
