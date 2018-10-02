import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { LoginService } from './Services/login.service';

@NgModule({
  declarations: [
    AppComponent, FirstComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
