import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {

  signupForm !: FormGroup;
  _URL = 'http://localhost:3000/signupUsers';

  constructor(private buildForm : FormBuilder, private http : HttpClient, private router : Router){

  }

  ngOnInit(){
    this.signupForm = this.buildForm.group({
      fullname :[''],
      email:[''],
      password:['']
    })
  }

  onSignUp(){
    this.http.post<any>(this._URL, this.signupForm.value)
    .subscribe(data =>{
      this.signupForm.reset();
      alert('signed up successfully!!!');
      this.router.navigate(['/login']);
    }, err =>{
      alert('Something gone wrong while signing up!!')
    })
  }

}
