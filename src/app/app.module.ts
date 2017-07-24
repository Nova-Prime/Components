import { GlobalConfiguration } from '../config/config';
import { RadioComponent } from './components/radio/radio';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



import { _HttpMiddleware } from '../services/httpMiddleware';
import { AuthGuard } from '../services/Auth.guard';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { InputComponent } from './components/input/input.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

const _declarations = [
  AppComponent,
  HeaderComponent,
  LoginComponent,
  ButtonComponent,
  InputComponent,
  PageNotFoundComponentComponent,
  RadioComponent
];

const _imports = [
  BrowserModule,
  HttpModule,
  FormsModule,
  AppRoutingModule,
];

const _providers = [
  GlobalConfiguration,
  _HttpMiddleware,
  AuthGuard
];

@NgModule({
  declarations: _declarations,
  imports: _imports,
  providers: _providers,
  bootstrap: [AppComponent]
})
export class AppModule { }
