import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-account',
  templateUrl: './search-account.component.html',
  styleUrls: ['./search-account.component.css']
})
export class SearchAccountComponent {

  @Input() searchedAccount : any;
  @Input() matchedAccount : any;

  isClicked = true;

  ngOnInit(){
    this.isClicked = !this.isClicked;
  }
  

}
