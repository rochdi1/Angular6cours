import { SharedService } from './Services/shared.service';
import {NewsComponent } from './news/news.component';
import {Component } from '@angular/core';
import {LoginService } from './Services/login.service';
import {Router } from '@angular/router';


@Component( {
selector:'app-root',
templateUrl:'./app.component.html',
styleUrls:['./app.component.css']
})
export class AppComponent {
title = 'my-dream-app';
nom = 'my name is';
// tslint:disable-next-line:quotemark
id:string = "33333";
status:boolean;

constructor(private mylogin:LoginService, private myrouter:Router, public myShared: SharedService) {

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
// Send Optional Params
goToFirst() {
this.myrouter.navigate(['/first',  {id:"2135", name:"rochdi"}]);
}
// Send With Query params
goToOther() {
this.myrouter.navigate(['other'],  {queryParams: {id:this.id, name:"rochdi", status:true}});
}

goToContact() {

}
// Send required Params
goToNews() {
this.myrouter.navigate(['news', this.id]);
}


}
