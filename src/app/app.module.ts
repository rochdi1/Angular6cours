import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { LoginService } from './Services/login.service';

@NgModule({
  declarations: [
    AppComponent, FirstComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
