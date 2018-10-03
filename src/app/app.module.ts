import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { LoginService } from './Services/login.service';
import { LoginformComponent } from './loginform/loginform.component';
import { NgfordataComponent } from 'src/app/ngfordata/ngfordata.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    LoginformComponent,
    NgfordataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
