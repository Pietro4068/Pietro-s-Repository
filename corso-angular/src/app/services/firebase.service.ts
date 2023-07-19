import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http: HttpClient) { }

  insertUser(url:string, body: {}){
    return this.http.post(url,body)
  }

  GetUser(url:string){
    return this.http.get(url)
  }

  deleteUser(url:string, id:string){
return this.http.delete(`${url}/${id}.json`)
  }

  PatchUser(url:string, id : string, body:{}){
    return this.http.patch(`${url}/${id}.json`, body)
  }
}