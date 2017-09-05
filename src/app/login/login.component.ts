import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {

  }

  login() {
    this.authService.login(this.email, this.password).subscribe(() => {
      if (this.authService.isLoggedIn) {
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/home';
        this.router.navigate([redirect]);
      } 
      else {
        console.log('login error !!');
      }
    });
  }

  logout() {
    this.authService.logout();
  }

  checkInputValue():boolean {
    var disabled = ( !this.email || !this.password );
    return disabled;
  }

}
