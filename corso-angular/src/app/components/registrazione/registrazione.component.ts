import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent {
 
  constructor(private authService: AuthService){}
  onSubmit(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;

    console.log(email, password)
  
    this.authService.signUp({email: email, password: password, returnSecureToken:true}).subscribe(data =>{console.log(data)})

    form.reset()
  }
}
