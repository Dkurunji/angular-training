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
    private loginService:LoginService,
    ){
    
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
      var currentdate = new Date(); 
      var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
      let transactionObj =  {
        "action": `savings Account Created -  ${formObject.account_number}`,
        "timestamp": `${datetime}`
      };
      let errMessage = 'Something gone wrong while adding transaction to logged in user!! - add transaction';
      this.loginService.add(transactionObj, errMessage);      
      this.ngOnInit(); 
    }, err =>{
      alert('Something gone wrong while creating account!!')
    })
  }

}
