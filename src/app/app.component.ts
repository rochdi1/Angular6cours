import { Component } from '@angular/core';
import { LoginService } from './Services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  nom:string = 'my name is';

  constructor(private mylogin:LoginService) {
    
    var first = this.mylogin.login('admin', 'admin');
    var seconde = this.mylogin.login('admin', 'admin2');
    console.log(first);
    console.log(seconde);
    
  }

  show() {
    console.log(this.nom);
  }

}
