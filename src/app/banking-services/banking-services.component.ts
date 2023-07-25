import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-banking-services',
  templateUrl: './banking-services.component.html',
  styleUrls: ['./banking-services.component.css']
})
export class BankingServicesComponent {

  cname_deposit : string = '';
  cnumber_deposit: string = '';
  camount_deposit:any;
  
  cname_withdraw : string = '';
  cnumber_withdraw: string = '';
  camount_withdraw:any;

  cname_close : string = '';
  cnumber_close: string = '';
  ctype_close:string = '';

  matchingAccount = '';

  constructor(private accountService : AccountService){}

  resetFormData(){

    this.cname_deposit = '';
    this.cnumber_deposit = '';
    this.camount_deposit = '';

    this.cname_withdraw = '';
    this.cnumber_withdraw = '';
    this.camount_withdraw = '';

    this.cname_close = '';
    this.cnumber_close = '';
    this.ctype_close = '';
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
