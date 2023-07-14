import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor() {}
  private color1  = new Subject<void>();
  private color2 = new Subject<void>();
  private color3 = new Subject<void>();
  private color4 = new Subject<void>();

  funzioneColor1$ = this.color1.asObservable();
  funzioneColor2$ = this.color2.asObservable();
  funzioneColor3$ = this.color3.asObservable();
  funzioneColor4$ = this.color4.asObservable();

  getUtenti() {
    return [
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
  }
  changeColor() {
    this.color1.next();
  }
  pippo() {
    this.color2.next();
  }
  changeColor4() {
    this.color3.next();
  }

  changeColor3() {
    this.color4.next();
  }
}