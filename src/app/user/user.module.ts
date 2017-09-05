import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { UserInfoComponent } from './user-info.component';
import { UserPasswordComponent } from './user-password.component';

import { UserRoutingModule } from './user-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  declarations: [
    UserInfoComponent,
    UserPasswordComponent
  ]
})
export class UserModule { }
