import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TestService } from 'src/app/test.service';

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
  
  
  
  

  public users : any[] = [];

  constructor(public serviceTool: TestService){}

  ngOnInit() {
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
    if (this.incrementa == this.users.length) {
      this.isDisabled = true;
    }
  }
  reset() {
    this.incrementa = 0;
    this.isDisabled = false;
  }
}
