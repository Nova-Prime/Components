import { HomeRouting } from './app.routes.home';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotUsernameComponent } from './forgot-username/forgot-username.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { AuthGuard } from './../services/Auth.guard';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
    ...HomeRouting,
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'forgotusername', component: ForgotUsernameComponent },
    { path: 'forgotpassword', component: ForgotPasswordComponent },
    { path: '**', component: PageNotFoundComponentComponent }
]



@NgModule({
    imports: [
        RouterModule.forRoot(route)
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule { }
