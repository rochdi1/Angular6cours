import { FirstComponent } from './first/first.component';
import { ContactComponent } from 'src/app/contact/contact.component';
import { OtherComponent } from 'src/app/other/other.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', component: OtherComponent },
  { path: 'other', component: OtherComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'first',
    component: FirstComponent
  },
  { path: '**', component: PageNotFoundComponent }
];
