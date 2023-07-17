import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  loginForm !: FormGroup;
  _URL = 'http://localhost:3000/signupUsers';

  constructor(
    private buildForm : FormBuilder, 
    private htttp : HttpClient, 
    private router : Router,
    private authService:AuthService){}
    
  ngOnInit(){
    this.loginForm = this.buildForm.group({
      email:['', [Validators.required]],
      password:['', [Validators.required, Validators.minLength(3)]]
    })
  }

  //these below 2 methods we used just for form validation
  getEmail(){
    return this.loginForm.get('email');
  }
  
  getPassword(){
    return this.loginForm.get('password');
  }

  //LOGIN USING JSON-SERVER
  onLogin(){
    this.htttp.get<any>(this._URL).subscribe( data =>{
      // console.log('checking!')
      const user = data.find( (el : any) =>{
        // console.log(el);
        // console.log(this.loginForm.value);
        return el.email === this.loginForm.value.email && el.password === this.loginForm.value.password;
      });

      if(user){
        this.router.navigate(['/home']);
        this.loginForm.reset();
      }else{
        alert('please enter valid inputs')
      }
    }, err =>{
      alert('something gone wrong!!!')
    })
  }


  //LOGIN USING FIREBASE AUTHENTICATION

  onLoginAuth(){
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
    .then( data =>{      
      localStorage.setItem('token', 'true');
      this.router.navigate(['/home']);
      alert('loggedIn Successfully!!!')
    }, err =>{
      this.router.navigate(['/login']);
      alert('something gone wrong while login!!')
    })
  }

}
