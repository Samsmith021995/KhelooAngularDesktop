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
    console.log(url);
    return (url.includes('/'));
  }

  getIsUrlPresent(){
    return this.isUrlPresentSubject.asObservable();
  }
}
