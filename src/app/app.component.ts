import { Component } from '@angular/core';
import { LoginService } from './Services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  nom = 'my name is';
  

  constructor(private mylogin: LoginService) {

    // tslint:disable-next-line:prefer-const
    let first = this.mylogin.login('admin', 'admin');
    // tslint:disable-next-line:prefer-const
    let seconde = this.mylogin.login('admin', 'admin2');
    console.log(first);
    console.log(seconde);

  }

  show() {
    console.log(this.nom);
  }






}
