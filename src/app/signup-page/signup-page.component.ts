import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  getFullName(){
    return this.signupForm.get('fullname');
  }
  
  getEmail(){
    return this.signupForm.get('email');
  }

  getPassword(){
    return this.signupForm.get('password');
  }

  ngOnInit(){
    this.signupForm = this.buildForm.group({
      fullname :['', Validators.required],
      email:['', [Validators.required]],
      password:['', [Validators.required, Validators.minLength(3)]]
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
