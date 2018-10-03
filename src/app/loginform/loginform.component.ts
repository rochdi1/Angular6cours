import { Component } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'loginform',
    templateUrl: 'loginform.component.html',
    styleUrls: ['loginform.component.scss']
})
export class LoginformComponent  {

  lg_username: string;
  lg_password: string;
  status:boolean;

  constructor(private mylogin: LoginService, private myrouter: Router) { }

  login() {
    var result = this.mylogin.login(this.lg_username, this.lg_password);
    this.status = result;
    if (this.status) {
      this.myrouter.navigate(['/first']);
    } else {
      this.myrouter.navigate(['/other']);
    }
    console.log(result);
  }

}
