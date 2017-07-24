import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.canActivate(childRoute, state);
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log('AuthGuard#canActivate called');
        this.router.navigate(['/']);
        return false;
    }

    constructor(private router: Router) {
        console.log("Called Constructor ");
    }
}