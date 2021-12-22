import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';


@Injectable({
  providedIn: 'root'
})
export class authCGuard implements CanActivate {

  constructor(private _AuthService: AuthService, private _Router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    if (localStorage.getItem('userRole') == this._AuthService.usersJSON[2].role) {
      return true
    } else {
      this._Router.navigate(['/dashboard'])
      return false
    }

  }
  
}
