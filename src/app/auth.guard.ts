
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";

import { AuthenticationService } from "./shared/services/authentication.service";
import { Observable, map } from "rxjs";


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Observable<boolean> | Promise<boolean> | boolean  {
    console.log('auth guard');
    return this.authService.isAuthenticated$.pipe(
      map(isAuth => {
        if (isAuth) {
          return true;
        } else {
          return false;
        }
      })
    )
  }
}