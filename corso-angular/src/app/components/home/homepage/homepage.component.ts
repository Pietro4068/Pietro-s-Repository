import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  @Output('changeColor') changeColor: EventEmitter<any> = new EventEmitter();
  @Output('pasquale') pippo: EventEmitter<any> = new EventEmitter();
  @Output('changeColor3') changeColor3: EventEmitter<any> = new EventEmitter();
  @Output('changeColor4') changeColor4: EventEmitter<any> = new EventEmitter();
  @Output('EmitDati') EmitDati: EventEmitter<any> = new EventEmitter();

  @Input() oggetto = '';

  incrementa: number = 0;
  isDisabled: boolean = false;
  i: number = 0;
  

  users = [
    {
      nome: 'Stefano',
      cognome: 'Vanga',
      citta: 'Burundi',
    },
    {
      nome: 'Pasquale',
      cognome: 'Vanga',
      citta: 'Burundi',
    },
    {
      nome: 'Gennaro',
      cognome: 'Vanga',
      citta: 'Burundi',
    },
    {
      nome: 'Vincenzo',
      cognome: 'Vanga',
      citta: 'Burundi',
    },
    {
      nome: 'Pietro',
      cognome: 'Vanga',
      citta: 'Burundi',
    },
    {
      nome: 'Matteo',
      cognome: 'Vanga',
      citta: 'Burundi',
    },
    {
      nome: 'Abdul',
      cognome: 'Vanga',
      citta: 'Burundi',
    },
    {
      nome: 'Marshalla',
      cognome: 'Vanga',
      citta: 'Burundi',
    },
    {
      nome: 'Lucia',
      cognome: 'Vanga',
      citta: 'Burundi',
    },
    {
      nome: 'Franpaolo',
      cognome: 'Vanga',
      citta: 'Burundi',
    },
  ];

  bgcolor = 'green';
  coloreNav = '';
  title = 'ciao';

  test() {
    this.changeColor.emit();
  }
  paperino() {
    this.pippo.emit();
  }

  pluto() {
    alert(this.oggetto);
  }
  cambiaColore3() {
    this.changeColor3.emit();
  }

  cambiaColore() {
    this.changeColor4.emit();
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

  EmitDatiUsers() {
    this.EmitDati.emit(this.users);
  }
}
