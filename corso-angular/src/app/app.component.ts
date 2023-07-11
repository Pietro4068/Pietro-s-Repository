import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'corso-angular';
  bgcolor = "BackgroundGrigio"
  testOggetto = "Stefano"
  
  changeColor(){
    
     this.bgcolor = "BackgroundVerde";
  }
  pippo(){
    
     this.bgcolor = "BackgroundBlu";
  }
  changeColor4(){
     this.bgcolor = "BackgroundArancione";
  }

  changeColor3(){
    this.bgcolor = "BackgroundRosa";
 }

  

}
