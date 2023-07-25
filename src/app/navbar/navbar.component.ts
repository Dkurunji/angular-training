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


  constructor(private accountService : AccountService){}

  onSearchAccount(account : any){
    console.log(this.searchedAccount);
      if(this.searchedAccount){
        this.accountService.searchAccount()
      .subscribe( data =>{
        for(let item of data){
          if(account == item.full_name || account == item.email || account == item.account_number){
            console.log('found!!')
            this.matchedAccount = item;
            this.searchedAccount = '';
            console.log(item);
            return;
          }else{
            this.matchedAccount = '';
            this.searchedAccount = '';
            // alert('Not Found!!!');
            console.log('Not found!!')
          }
        }          
      }
      , err =>{
        alert("error");
      })
      }
  }

  resetSearch(){
    console.log('Closed');
    this.matchedAccount = '';
    this.searchedAccount = '';
  }
     

}
