import {SharedService }from './../Services/shared.service';
import {routes }from 'src/app/app.routes';
import {Component }from '@angular/core';
import {ActivatedRoute }from '@angular/router';

@Component( {

selector:'news',
templateUrl:'news.component.html',
styleUrls:['news.component.scss']
})
export class NewsComponent {
id:string;

constructor(private myaccessroute:ActivatedRoute, public shared:SharedService) {
//get id from route
this.id = this.myaccessroute.snapshot.paramMap.get('id');
console.log('hada howa id: ', this.id);

console.log(this.shared.getLogin());
console.log(this.shared.getToken());
console.log(this.shared.getUser());
}

}
