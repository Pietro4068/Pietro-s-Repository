import { AfterViewChecked, Component, OnInit, SimpleChanges } from '@angular/core';
import { map } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements AfterViewChecked,OnInit{

  item = [
    {item1: "Ciao sono il primo oggetto del primo array"},
    {item2: "Ciao sono il secondo oggetto del primo array "}
  ]

  constructor(public firebase: FirebaseService){}
  persone:any
  
 ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.firebase.GetUser('https://corso-angular-ae09a-default-rtdb.europe-west1.firebasedatabase.app/persone.json').subscribe((data :any) =>{
    // console.log(data)
  this.persone = Object.keys(data).map((key) => {
    data[key]['id'] = key
    return data[key]})
  console.log(this.persone)
  
  })
 }

 OnDeletePersona(id:string){
  this.firebase.deleteUser('https://corso-angular-ae09a-default-rtdb.europe-west1.firebasedatabase.app/persone',id)
  .subscribe(data => {
    console.log(data)})
    console.log(id);
}

onPatchPersona(id:string){
  this.firebase.PatchUser('https://corso-angular-ae09a-default-rtdb.europe-west1.firebasedatabase.app/persone',
  id,
  {nome: "NomeProva"}
  ).subscribe(data => {console.log(data)})
}

  // public users : any[] = this.serviceTool.getUtenti();

  // constructor(public serviceTool: TestService){}
  // birthday = new Date(1988, 3, 15); 

  // ngOnInit() {
  //   this.users = this.serviceTool.getUtenti();
  // }

  // eliminaOggetto(){

  //   let length = this.users.length;
  //   console.log('users', this.users)
  //   this.users.pop();
  // }

  // ngAfterViewChecked(): void {
  //   this.users = this.serviceTool.getUtenti();
  // }

  ngAfterViewChecked(): void {
    
  }

}
