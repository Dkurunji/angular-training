import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-transation-item',
  templateUrl: './transation-item.component.html',
  styleUrls: ['./transation-item.component.css']
})
export class TransationItemComponent {

  transactionItems : any = [];

  constructor(private loginService : LoginService){
    this.loginService.getTransactions().subscribe(data =>{
      this.transactionItems = data;
    })
  }
  
  ngOnInit(){
    
  }

}
