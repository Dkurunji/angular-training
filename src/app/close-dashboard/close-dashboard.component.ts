import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-close-dashboard',
  templateUrl: './close-dashboard.component.html',
  styleUrls: ['./close-dashboard.component.css']
})
export class CloseDashboardComponent {


   cname_close : string = '';
  cnumber_close: string = '';
  ctype_close:string = '';

  matchingAccount = '';

  constructor(private accountService : AccountService){}

  resetFormData(){    
    this.cname_close = '';
    this.cnumber_close = '';
    this.ctype_close = '';
  }


  //delete the customer account
  deleteAccount(){
    this.accountService.searchAccount()
    .subscribe(data =>{
      let itemFound = false;
      for(let item of data){
        if(this.cname_close == item.full_name || this.cnumber_close == item.account_number){
          this.accountService.onDeleteAccount(item)
          .subscribe(data => {
            this.resetFormData();
            alert('Account deleted successfully!!')
          }, err =>{
            alert('Something Gone wrong while deleting the account!!')
          })
          return;
        }
      }
      if(!itemFound){
        alert('No mathing accounts found!!');
        this.resetFormData();
      }    
    }, err =>{
      alert('something gone wrong while fetching all the accounts - delete');
    })
  }

}
