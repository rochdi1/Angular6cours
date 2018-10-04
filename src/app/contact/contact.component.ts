import { SharedService } from './../Services/shared.service';
import { Component } from '@angular/core';

@Component({

    selector: 'contact',
    templateUrl: 'contact.component.html',
    styleUrls: ['contact.component.scss']
})
export class ContactComponent {


  constructor(public shared: SharedService) {
    this.shared.setLogin("true");
    this.shared.setToken("hgfkjhkjh");
    this.shared.setUser("rochdi");
  }


}
