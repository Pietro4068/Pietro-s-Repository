import { Component } from '@angular/core';

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
}
