import { Component } from '@angular/core';
import { TestService } from 'src/app/test.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  item = [
    {item1: "Ciao sono il primo oggetto del primo array"},
    {item2: "Ciao sono il primo oggetto del secondo array "}
  ]
  public users : any[] = [];

  constructor(public serviceTool: TestService){}
  birthday = new Date(1988, 3, 15); 

  ngOnInit() {
    this.users = this.serviceTool.getUtenti();
  }

  eliminaOggetto(){

    let length = this.users.length;
    console.log('users', this.users)
    this.users.pop();
  }

}
