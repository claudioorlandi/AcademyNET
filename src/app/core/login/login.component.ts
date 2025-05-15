import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginStatus: boolean = false;

  SetLoginStatus() {
    this.loginStatus != this.loginStatus;
  }
}
