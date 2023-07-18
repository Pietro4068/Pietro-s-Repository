import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { TestService } from 'src/app/test.service';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css'],
})
export class ActionsComponent implements OnInit {
  homeform: any;
  Anni: number;

  constructor(public serviceTool: TestService) {}
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
  }
}
