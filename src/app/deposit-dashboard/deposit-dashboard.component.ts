import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-deposit-dashboard',
  templateUrl: './deposit-dashboard.component.html',
  styleUrls: ['./deposit-dashboard.component.css']
})
export class DepositDashboardComponent {

  cname_deposit : string = '';
  cnumber_deposit: string = '';
  camount_deposit:any;
  
  matchingAccount = '';

  constructor(private accountService : AccountService){}

  resetFormData(){
    this.cname_deposit = '';
    this.cnumber_deposit = '';
    this.camount_deposit = '';
  }

  //deposit money to a account
  depositToAccount(){
    this.accountService.searchAccount()
    .subscribe(data =>{
      let itemFound = false;
      for(let item of data){
        if(this.cname_deposit == item.full_name && this.cnumber_deposit == item.account_number){
          itemFound = true;
          let newbalance = Number(item.balance);
          console.log(newbalance);
          newbalance += Number(this.camount_deposit);
          let newAccount = item;
          newAccount.balance = newbalance;
          newAccount.transactions.push(`${this.camount_deposit} deposit`);
          this.accountService.depositMoney(newAccount)
            .subscribe(data => {
              this.resetFormData();
              alert('Money deposited successfully!!')
            }, err =>{
              alert('Something Gone wrong while depositing money!!')
            })
          return;
        }
      }
      if(!itemFound){
        alert('No mathing accounts found!!');
        this.resetFormData();
      } 
    }, err =>{
      alert('something gone wrong while fetching accounts - deposit')
    })
  }

}
