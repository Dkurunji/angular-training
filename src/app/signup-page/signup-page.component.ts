import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {

  signupForm !: FormGroup;
  _URL = 'http://localhost:3000/signupUsers';


  constructor(
    private buildForm : FormBuilder, 
    private http : HttpClient, 
    private router : Router,
    private authService:AuthService){

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

  //signing up using json server
  onSignUp(){
    this.http.post<any>(this._URL, this.signupForm.value)
    .subscribe(data =>{
      this.signupForm.reset();
      this.router.navigate(['/login']);
      alert('signed up successfully!!!');
    }, err =>{
      this.signupForm.reset();
      alert('Something gone wrong while signing up!!')
    })
  }

  //signup using firebase authentication. 
  //we are injecting AuthService to here
  onSignUpAuth(){
    this.authService.signup(this.signupForm.value.email, this.signupForm.value.password);
  }


}
