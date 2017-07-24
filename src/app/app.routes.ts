import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { AuthGuard } from './../services/Auth.guard';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'login', component: LoginComponent, children: [
            {
                path: 'account', component: PageNotFoundComponentComponent
            }, {
                path: 'Helloworld', component: PageNotFoundComponentComponent
            }
        ]
    },
    { path: 'test', component: PageNotFoundComponentComponent, canActivate: [AuthGuard] },
    { path: '**', component: PageNotFoundComponentComponent }
];


@NgModule({
    imports: [
        RouterModule.forRoot(route)
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule { }
