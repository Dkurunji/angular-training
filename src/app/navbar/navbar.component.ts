import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  searchedAccount : any;
  matchedAccount: any = '';

  updatedFullname : any  = "";
  updatedemail : any  = "";
  updatedaccount_type : any  = "";
  updatedaccount_number : any  = "";

  constructor(private accountService : AccountService){}

  onSearchAccount(account : any){
      if(this.searchedAccount){
        this.accountService.searchAccount()
      .subscribe( data =>{
        for(let item of data){
          if(account === item.full_name || account === item.email || account == item.account_number){
            this.matchedAccount = item;
            this.searchedAccount = '';
            console.log(item);
          }else{
            this.matchedAccount = '';
            this.searchedAccount = '';
            // alert('Not Found!!!');
          }
        }          
      }
      , err =>{
        alert("error");
      })
      }
  }
     

}
