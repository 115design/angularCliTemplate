import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { UserModule } from './user/user.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    LoginModule,
    UserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
