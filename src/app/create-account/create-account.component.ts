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
  id:number = 1001;

  constructor(
    private formBuilder : FormBuilder,
    private accountCreateService: AccountService){

  }

  ngOnInit(){
    this.accountCreationForm = this.formBuilder.group({
      full_name:[''],
      email:[''],
      account_type:['savings'],
      account_number:[this.id]
    })
  }

  onCreateAccount(){
    console.log(this.accountCreationForm.value);

    this.accountCreateService.createNewAccount(this.accountCreationForm.value);
  }

}
