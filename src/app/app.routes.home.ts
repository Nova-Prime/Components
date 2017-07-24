import { HomeRootComponent } from './home-root/home-root.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HelpComponent } from './help/help.component';
import { FaqComponent } from './faq/faq.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';


export const HomeRouting: Routes = [
    {
        path: '', component: HomeComponent, children: [
            { path: '', component: HomeRootComponent },
            { path: 'account', component: AccountComponent },
            { path: 'faq', component: FaqComponent },
            { path: 'help', component: HelpComponent },
            { path: 'changepassword', component: ChangePasswordComponent }
        ]
    }
];

