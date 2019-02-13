import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AccountManagementRoutingModule } from './account-management-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import {
  MatSidenavModule,
  MatToolbarModule,
  MatInputModule,
  MatButtonModule,
  MatTabsModule,
  MatSelectModule,
  MatIconModule,
  MatListModule,
  MatSnackBarModule,
  MatProgressBarModule,
  MatFormFieldModule,
  MatCardModule,
  MatGridListModule,  
  MatCheckboxModule,
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AccountManagementRoutingModule,
    FormsModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatCardModule,
    MatGridListModule,
    MatCheckboxModule,
    FlexLayoutModule.withConfig({addFlexToParent: false})    
  ]
})
export class AccountManagementModule { }
