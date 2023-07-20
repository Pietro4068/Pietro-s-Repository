import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  /* @Output('changeColor') changeColor: EventEmitter<any> = new EventEmitter();
  @Output('pasquale') pippo: EventEmitter<any> = new EventEmitter();
  @Output('changeColor3') changeColor3: EventEmitter<any> = new EventEmitter();
  @Output('changeColor4') changeColor4: EventEmitter<any> = new EventEmitter();
  @Output('EmitDati') EmitDati: EventEmitter<any> = new EventEmitter(); */

  @Input() oggetto = '';

  incrementa: number = 0;
  isDisabled: boolean = false;
  i: number = 0;
  
  
  
  

 

  constructor(public serviceTool: TestService, private authService: AuthService, private firebase:FirebaseService){}
  persone:any
  public users : any[] = [];
  // ngOnInit() {
  //   this.users = this.serviceTool.getUtenti();
    
  // }

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

  

  ngOnChanges(changes: SimpleChanges) {
    
    this.users = this.serviceTool.getUtenti();

  }
  
  bgcolor = 'green';
  coloreNav = '';
  title = 'ciao';

  test() {
    this.serviceTool.changeColor4();
  }
  paperino() {
    this.serviceTool.pippo();
  }

  pluto() {
    alert(this.oggetto);
  }
  cambiaColore3() {
    this.serviceTool.changeColor3();
  }

  cambiaColore() {
    this.serviceTool.changeColor();
  }

  increment() {
    this.incrementa++;
    if (this.incrementa == this.persone.length) {
      this.isDisabled = true;
    }
  }
  reset() {
    this.incrementa = 0;
    this.isDisabled = false;
  }
}
