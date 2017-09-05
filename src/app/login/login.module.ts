import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }          from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { AuthGuardService } from '../services/auth-guard.service';
import { AuthService } from '../services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ],
  declarations: [LoginComponent],
  providers: [ AuthGuardService, AuthService ]
})
export class LoginModule { }
