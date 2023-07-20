import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-accedi',
  templateUrl: './accedi.component.html',
  styleUrls: ['./accedi.component.css']
})
export class AccediComponent {

 constructor(private authService: AuthService){}
  onSubmit(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;

    console.log(email, password)
  
    this.authService.signIn({email: email, password: password, returnSecureToken:true}).subscribe((data:any) =>{
      console.log(data)
      console.log(data.expiresIn)
      const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)
      console.log(expirationDate)
      this.authService.createUser(data.email, data.localId, data.idToken, expirationDate)
      localStorage.setItem('user',JSON.stringify(this.authService.user))
      console.log(this.authService.user)
    })

    form.reset()
  }
}
