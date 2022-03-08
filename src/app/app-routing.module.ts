import { UserRegistrationComponent } from './userregistration/userregistration.component';
import { UserRegistration } from './models/user.model';
import { JournalComponent } from './journal/journal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './userlogin/userlogin.component';
import { ViewJournalsComponent } from './viewjournals/viewjournals.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'login' },
  { path: 'login', component: UserLoginComponent },
  { path: 'journal', component: ViewJournalsComponent },
  { path: 'register', component: UserRegistrationComponent },
  { path: 'create-journal', component: JournalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
