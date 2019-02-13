import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const AccountManagementRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'account-login', component: LoginComponent},
  { path: 'account-register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(AccountManagementRoutes)],
  exports: [RouterModule]
})
export class AccountManagementRoutingModule { }
