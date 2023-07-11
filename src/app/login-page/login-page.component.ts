import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  loginForm !: FormGroup;
  _URL = 'http://localhost:3000/signupUsers';

  constructor(private buildForm : FormBuilder, private htttp : HttpClient, private router : Router){}
    
  ngOnInit(){
    this.loginForm = this.buildForm.group({
      email:[''],
      password:['']
    })
  }

  onLogin(){
    this.htttp.get<any>(this._URL).subscribe( data =>{
      // console.log('checking!')
      const user = data.find( (el : any) =>{
        console.log(el);
        console.log(this.loginForm.value);
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

}
