import { Injectable } from '@angular/core';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})

export class canActivateAuthGuard implements CanActivate  {

  constructor(private auth: AuthenticationService , private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean|UrlTree> |boolean|UrlTree{
    if (this.auth.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
}
}
