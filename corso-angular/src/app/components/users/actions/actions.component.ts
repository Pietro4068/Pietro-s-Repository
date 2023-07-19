import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { TestService } from 'src/app/services/test.service';
import { ListComponent } from '../list/list.component';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css'],
})
export class ActionsComponent implements OnInit {
  homeform: any;
  Anni: number;
  id : string;

  constructor(public serviceTool: TestService, private firebase: FirebaseService) {}
  arraydata: any[] = this.serviceTool.getUtenti();

  ngOnInit(): void {
    this.homeform = new FormGroup({
      nome: new FormControl(null, Validators.required),
      cognome: new FormControl(null, Validators.required),
      citta: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      dataNascita: new FormControl(null, Validators.required),
    });

    
    
  }
     
 


  onSubmit() {
    console.log(this.homeform);
    var dob = this.homeform.value.dataNascita;
    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    console.log(age);
    this.Anni = age;

    this.arraydata.push(this.homeform.value);
    this.serviceTool.setUtenti(this.arraydata);
    console.log(this.arraydata);
    console.log(this.homeform.value);
    console.log(this.serviceTool.getUtenti);


    this.firebase.insertUser('https://corso-angular-ae09a-default-rtdb.europe-west1.firebasedatabase.app/persone.json',
    {nome: this.homeform.value.nome,cognome: this.homeform.value.cognome,email: this.homeform.value.email, citta: this.homeform.value.citta,dataNascita: this.homeform.value.dataNascita}).subscribe(data => {
      console.log(data) 
    })

  }

 
}
