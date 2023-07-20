import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AccountService } from '../account.service';

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
    private accountCreateService: AccountService){
    localStorage.setItem('ID', '1000');
    this.ID  = Number(localStorage.getItem('ID'));

  }

  ngOnInit(){
    
    this.accountCreationForm = this.formBuilder.group({
      full_name:[''],
      email:[''],
      account_type:['savings'],
      account_number:[++this.ID],
      balance:[0]
    })

  }
 

  onCreateAccount(){
    this.accountCreateService.createNewAccount(this.accountCreationForm.value)
    .subscribe(data =>{
      alert('Account Created Successfully');
      this.ngOnInit();      
    }, err =>{
      alert('Something gone wrong while creating account!!')
    })
  }

}
