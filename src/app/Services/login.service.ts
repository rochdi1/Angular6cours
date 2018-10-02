import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(user, pass){
    if(user == "admin" && pass == "admin") {
      return true;
    } else {
      return false;
    }
  }
}
