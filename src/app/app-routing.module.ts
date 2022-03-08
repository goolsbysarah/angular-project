import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'main-menu' },
  { path: 'login', component: UserLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
