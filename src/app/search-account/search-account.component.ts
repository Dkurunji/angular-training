import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-search-account',
  templateUrl: './search-account.component.html',
  styleUrls: ['./search-account.component.css']
})
export class SearchAccountComponent {

  @Input() searchedAccount : any;
  @Input() matchedAccount : any;
  isEditClicked : any = false;
  isViewClicked : any = false;

  updateForm : any;

  constructor(private formBuilder : FormBuilder, private accountService : AccountService){
  }

  ngOnInit(){
    this.updateForm = this.formBuilder.group({
      full_name:[this.matchedAccount.full_name],
      email:[this.matchedAccount.email],
      account_type:[this.matchedAccount.account_type],
      account_number:[this.matchedAccount.account_number],
      balance:[this.matchedAccount.balance],
      id:[this.matchedAccount.id],
      transactions:[this.matchedAccount.transactions]
    })
    // console.log(this.matchedAccount.value);
  }

  //true false
  viewHandler(){
    this.isEditClicked = false; 
    this.isViewClicked = true;
  }
  //false true
  editHandler(){
    this.ngOnInit();
    this.isViewClicked = false;
    this.isEditClicked = true; 
  }

  resetButtonClicks(){
    this.isViewClicked = false;
    this.isEditClicked = false;

  }

  updateAccount(account : any){
    this.accountService.onUpdateAccount(account)
      .subscribe( data =>{
        alert('Updated successfully!!');
        this.resetButtonClicks();
      }, err =>{
        alert('Gone something wrong!!');
      })
    console.log(this.updateForm.value);
  }

 

}
