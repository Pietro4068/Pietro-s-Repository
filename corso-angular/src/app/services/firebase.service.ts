import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  insertUser(url:string, body: {}){
    return this.http.post(`${url}?auth=${this.authService.user.token}`,body)
  }

  GetUser(url:string){
    return this.http.get(`${url}?auth=${this.authService.user.token}`)
  }

  deleteUser(url:string, id:string){
return this.http.delete(`${url}/${id}.json?auth=${this.authService.user.token}`)
  }

  PatchUser(url:string, id : string, body:{}){
    return this.http.patch(`${url}/${id}.json?auth=${this.authService.user.token}`, body)
  }
}
