import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent {

  updateAccountForm : any;

  constructor(private formBuilder : FormBuilder){}

  ngOnInit(){
    this.updateAccountForm = this.formBuilder.group({
      full_name:[''],
      email:[''],
      account_type:['savings'],
      account_number:['']

    })
  }

  updateHandler(){
    
  }


  // onUpdateAccount(){
  //   this.accountCreateService.createNewAccount(this.accountCreationForm.value)
  //   .subscribe(data =>{
  //     alert('Account Created Successfully');
  //     this.accountCreationForm.reset();
  //   }, err =>{
  //     alert('Something gone wrong while creating account!!')
  //   })
  // }

}
