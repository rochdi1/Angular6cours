import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({

    selector: 'other',
    templateUrl: 'other.component.html',
    styleUrls: ['other.component.scss']
})
export class OtherComponent {
  id:string;
  name:string;
  status:string;
  constructor(private myaccessroute:ActivatedRoute) {
    //get params from query Params
    this.id = this.myaccessroute.snapshot.queryParamMap.get('id');
    this.name = this.myaccessroute.snapshot.queryParams['name'];
    this.status = this.myaccessroute.snapshot.queryParamMap.get('status');
    console.log('hada howa les resulta: ', this.id, this.name, this.status);
    }
}
