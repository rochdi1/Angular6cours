import { Component } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
    selector: 'loginform',
    templateUrl: 'loginform.component.html',
    styleUrls: ['loginform.component.scss']
})
export class LoginformComponent  {

  lg_username: string;
  lg_password: string;
  status:boolean;

  constructor(private mylogin: LoginService) { }

  login() {
    var result = this.mylogin.login(this.lg_username, this.lg_password);
    this.status = result;
    console.log(result);
  }

}
