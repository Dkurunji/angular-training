import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-recent-activities',
  templateUrl: './recent-activities.component.html',
  styleUrls: ['./recent-activities.component.css']
})
export class RecentActivitiesComponent {

  constructor(private loginService : LoginService){}

  transactions = [];

  ngOnInit(){
    this.getTransactions();
  }

  getTransactions(){
    this.loginService.getTransactions().subscribe(data =>{

      for(let item of data){
        this.transactions = item.transactions;
      }
    
    })
  }

}
