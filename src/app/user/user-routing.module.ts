import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserInfoComponent } from './user-info.component';
import { UserPasswordComponent } from './user-password.component';
import { AuthGuardService } from '../services/auth-guard.service';

const routes: Routes = [
  { 
    path: 'user',
    children: [
      {
        path: 'info',
        component: UserInfoComponent,
        canActivateChild: [ AuthGuardService ], 
      },
      {
        path: 'password',
        component: UserPasswordComponent,
        canActivateChild: [ AuthGuardService ], 
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
