import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { Logger } from './components/Logger';
import { HomeRootComponent } from './home-root/home-root.component';
import { ForgotUsernameComponent } from './forgot-username/forgot-username.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FaqComponent } from './faq/faq.component';
import { HelpComponent } from './help/help.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
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
import { LoginComponent, ModalContentComponent } from './login/login.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

const _declarations = [
  AppComponent,
  HeaderComponent,
  LoginComponent,
  ButtonComponent,
  InputComponent,
  PageNotFoundComponentComponent,
  RadioComponent,
  HomeComponent,
  AccountComponent,
  ChangePasswordComponent,
  HelpComponent,
  FaqComponent,
  ForgotPasswordComponent,
  ForgotUsernameComponent,
  HomeRootComponent,
  ModalContentComponent
];

const _imports = [
  BrowserModule,
  HttpClientModule,
  FormsModule,
  AppRoutingModule,
  ModalModule.forRoot(),
];

const _providers = [
  GlobalConfiguration,
  // _HttpMiddleware,
  AuthGuard,
  Logger,
];

@NgModule({
  declarations: _declarations,
  imports: _imports,
  providers: _providers,
  entryComponents: [ModalContentComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
