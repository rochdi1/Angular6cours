import { Component } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({

    selector: 'ngfordata',
    templateUrl: 'ngfordata.component.html',
    styleUrls: ['ngfordata.component.scss']
})
export class NgfordataComponent {

  names: Array<object>;
  constructor(private mylogin: LoginService) { }

  loadnames() {
    this.names =  this.mylogin.load();
    console.log(this.names);
   }

}
