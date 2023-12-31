import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth : AngularFireAuth, private router : Router) { }

  signup(email : string, password : string){
    this.fireAuth.createUserWithEmailAndPassword(email, password)
    .then( data =>{
      alert('Signup Successful!!!')
      this.router.navigate(['/login']);
    }, err =>{
      alert('something gone wrong while signup!!')
      this.router.navigate(['/signup']);
    })  
  }
  
  login(email : string, password : string){
    return this.fireAuth.signInWithEmailAndPassword(email, password);
    
  }  
  
  logout(){
    localStorage.removeItem('token');
    return this.fireAuth.signOut();  

  }

  isLoggedIn(){
    if(!!localStorage.getItem('token')){
      return true;
    }
    else{
      alert('Plese login to access this page');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
