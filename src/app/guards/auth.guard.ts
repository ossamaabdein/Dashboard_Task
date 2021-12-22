import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private _Router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      // If user's data have been saved into local storage, he is authenticated 
      if (localStorage.getItem('userData') != null && localStorage.getItem('userRole') != null) {
        return true
      } else {
        this._Router.navigate(['/login'])
        return false
      }
  }
  
}
