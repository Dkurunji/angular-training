import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-get-transactions',
  templateUrl: './get-transactions.component.html',
  styleUrls: ['./get-transactions.component.css']
})
export class GetTransactionsComponent {  
  userTransactions = [];
  acc_number = '';
  isClicked = false; 

  constructor(private accountService : AccountService){}

  ngOnInit(){
    // this.getTransaction();
  }

  getTransaction(){
    let accountFound = false;   
    this.isClicked = !this.isClicked;
    this.accountService.searchAccount().subscribe(data =>{
      for(let item of data){
        if(item.account_number==this.acc_number){
          this.userTransactions = item.transactions;
          accountFound = true; 
          return;
        }
      }
      if(!accountFound) alert('account not found!!!')
    }, err =>{

    })
  }

  closeTransaction(){
    this.acc_number = '';
    this.userTransactions = [];
  }

}
