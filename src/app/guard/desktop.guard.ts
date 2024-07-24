// import { CanActivateFn } from '@angular/router';

// export const loginGuard: CanActivateFn = (route, state) => {
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
export class DesktopGuard implements CanActivate {

  isSmallScreen!:boolean;
  constructor(private router: Router,private commonSer:CommonServiceService,private apiService:ApiService) {
    this.commonSer.myVariable$.subscribe((width)=>{
      this.isSmallScreen = width === "true";
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // const userHasAccess = this.checkUserAccess();
    if(this.isSmallScreen){
      return this.router.navigate(['/404']);
    }else{
      return !this.isSmallScreen;

    }
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