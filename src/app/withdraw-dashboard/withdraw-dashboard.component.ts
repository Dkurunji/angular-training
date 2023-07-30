import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-withdraw-dashboard',
  templateUrl: './withdraw-dashboard.component.html',
  styleUrls: ['./withdraw-dashboard.component.css']
})
export class WithdrawDashboardComponent {

  cname_withdraw : string = '';
  cnumber_withdraw: string = '';
  camount_withdraw:any;

  matchingAccount = '';

  constructor(private accountService : AccountService){}

  resetFormData(){
    this.cname_withdraw = '';
    this.cnumber_withdraw = '';
    this.camount_withdraw = '';
  }

  //withdraw money from a account
  withdrawMoneyFromAccount(){
    this.accountService.searchAccount()
    .subscribe(data =>{
      let itemFound = false;
      for(let item of data){
        if(this.cname_withdraw == item.full_name && this.cnumber_withdraw == item.account_number){
          itemFound = true;
          let accountBalance = Number(item.balance);
          if(accountBalance>=this.camount_withdraw){
            accountBalance -= Number(this.camount_withdraw);
            let newAccount = item;
            newAccount.balance = accountBalance;
            newAccount.transactions.push(`${this.camount_withdraw} withdraw`);
            this.accountService.withdrawMoney(newAccount)
              .subscribe(data => {
                this.resetFormData();
                alert('Money withdraw successfully!!')
              }, err =>{
                alert('Something Gone wrong while depositing money!!')
              })
            return;
          }else{
            alert('Insufficient Balance!!')
          }
          this.resetFormData();
        }
      }
      if(!itemFound){
        alert('No mathing accounts found!!');
        this.resetFormData();
      } 
    }, err =>{
      alert('something gone wrong while fetching accounts - withdraw')
    })
  }

}
