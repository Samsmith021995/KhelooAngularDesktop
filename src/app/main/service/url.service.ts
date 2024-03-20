import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable, Subject ,BehaviorSubject} from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  private isUrlPresentSubject = new BehaviorSubject<string>('intialValue') ;
  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const isUrlPresent = this.checkIfUrlIsPresent();
        let param = isUrlPresent?'true':'false';
        this.isUrlPresentSubject.next(param);
      });
  }

  private checkIfUrlIsPresent():boolean {
    const url = window.location.href;
    return (url.endsWith('/') || url.endsWith('/m-promotion') || url === window.location.origin ||  url.split('#')[0] ===  window.location.origin+'/');
    // return (url.includes('/m-deposit') || url.includes('/m-withdraw') || url.includes('/m-setting') || url.includes('/m-statement'));
  }

  getIsUrlPresent(){
    return this.isUrlPresentSubject.asObservable();
  }
}
