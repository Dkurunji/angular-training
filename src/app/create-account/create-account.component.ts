import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AccountService } from '../account.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  accountCreationForm: any;
  ID: any;

  constructor(
    private formBuilder : FormBuilder,
    private accountCreateService: AccountService,
    private loginService:LoginService){
    
    localStorage.setItem('ID', '1000');
    this.ID  = Number(localStorage.getItem('ID'));

  }

  ngOnInit(){
    
    this.accountCreationForm = this.formBuilder.group({
      full_name:[''],
      email:[''],
      account_type:['savings'],
      account_number:[++this.ID],
      balance:[0],
      transactions:[['account created successfully']]
    })

  }
 

  onCreateAccount(){
    let formObject = this.accountCreationForm.value;
    console.log(formObject);
    this.accountCreateService.createNewAccount(this.accountCreationForm.value)
    .subscribe(data =>{
      alert('Account Created Successfully');
      this.ngOnInit(); 

      //adding transactions to logged in user  
      this.loginService.getTransactions().subscribe(data =>{
        for(let item of data){
          let newTransaction =   {
            "action": `${formObject.account_type} Account Created ${formObject.account_number}`,
            "timestamp": `${new Date().toLocaleDateString()}`
          }
          let newObject = item;          
          newObject.transactions.push(newTransaction);
          console.log(newObject);

          this.loginService.addTransaction(newObject).subscribe(data =>{
            window.location.reload();
          }, err =>{
            alert('Something gone wrong while adding transaction to logged in user!! - add transaction')
          })
        }
      }, err =>{
        alert('Something gone wrong while adding transaction to logged in user!! - get transactions');
      })
      
    }, err =>{
      alert('Something gone wrong while creating account!!')
    })
  }

}
