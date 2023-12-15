// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonServiceService } from '../main/service/common-service.service';
import { ApiService } from '../main/service/api.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,private commonSer:CommonServiceService,private apiService:ApiService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userHasAccess = this.checkUserAccess();
    if (state.url === '/deposit' && !userHasAccess) {
      // Redirect to login page if trying to access /deposit without login
      return this.router.parseUrl('/login');
    }
  
    if (state.url === '/login' && userHasAccess) {
      // Redirect to home page if trying to access /login after login
      return this.router.parseUrl('/');
    }
  
    if (!userHasAccess) {
      // Redirect to login page for any other unauthorized access
      return this.router.parseUrl('/login');
    }
  
    // Allow access for authorized users
    return true;
  }

  private checkUserAccess(): boolean {
    let check  =  this.apiService.checkLogin();
    if(check){
      return true;
    }else{
      return false;
    }

  }
}