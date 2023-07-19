import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyASwr-wX7sbHVZn6P_cO9tI39zv4YxuWow";
  signUp(body:{}){
    return this.http.post(this.url,body)
  }
}
