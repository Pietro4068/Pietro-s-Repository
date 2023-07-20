import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  title = 'corso-angular';
  bgcolor = 'BackgroundGrigio';
  testOggetto = 'Stefano';

  constructor(public serviceTool: TestService, private authService: AuthService) {}

  ngOnInit() {
    this.serviceTool.funzioneColor1$.subscribe(() => {
      this.changeColor();
    });
    this.serviceTool.funzioneColor2$.subscribe(() => {
      this.pippo();
    });
    this.serviceTool.funzioneColor3$.subscribe(() => {
      this.changeColor4();
    });
    this.serviceTool.funzioneColor4$.subscribe(() => {
      this.changeColor3();
    });
  }

  changeColor() {
    this.bgcolor = 'BackgroundVerde';
  }
  pippo() {
    this.bgcolor = 'BackgroundBlu';
  }
  changeColor4() {
    this.bgcolor = 'BackgroundArancione';
  }
  changeColor3() {
    this.bgcolor = 'BackgroundRosa';
  }
  onLogout(){
    this.authService.logout()
  }
}
