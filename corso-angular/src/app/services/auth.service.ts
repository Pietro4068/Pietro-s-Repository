import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

APIkey = 'AIzaSyASwr-wX7sbHVZn6P_cO9tI39zv4YxuWow';
signUpUrl =  `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.APIkey}`;
signInUrl =  `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.APIkey}`;
isLoggedIn = true;
isAdmin = true;

  user: User;

  constructor(private http: HttpClient, private router: Router) { }


  createUser(email: string , id: string, token: string, expirationDate:Date){
     this.user = new User(email, id, token, expirationDate)
     this.isLoggedIn = true;
  }
  
  signUp(body:{}){
    return this.http.post(this.signUpUrl,body)
  }

  signIn(body:{}){
    return this.http.post(this.signInUrl,body)
  }
  
  logout(){
    this.isLoggedIn = false;
    localStorage.removeItem('user')
    this.router.navigate(['/Accedi'])
  }

}
