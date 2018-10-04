import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { LoginService } from './Services/login.service';
import { LoginformComponent } from './loginform/loginform.component';
import { NgfordataComponent } from 'src/app/ngfordata/ngfordata.component';
import { OtherComponent } from 'src/app/other/other.component';
import { ContactComponent } from 'src/app/contact/contact.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { routes } from 'src/app/app.routes';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    LoginformComponent,
    NgfordataComponent,
    OtherComponent,
    ContactComponent,
    PageNotFoundComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
