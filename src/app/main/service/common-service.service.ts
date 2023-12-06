import { Injectable, HostListener } from '@angular/core';
import { BehaviorSubject, fromEvent, merge, Observable,Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  private myVariableSubject = new BehaviorSubject<string>('initialValue');
  myVariable$ = this.myVariableSubject.asObservable();
  isSmallScreen!:string
  constructor() {
    this.init();
    
  }

  private init() {
    // Use RxJS to listen to window resize events
    fromEvent(window, 'resize').subscribe((event: Event) => {
      this.checkScreenSize();
    });

    // Initial check for screen size
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    let screenWidth = window.innerWidth;
    // console.log("check event " + screenWidth);

    if (screenWidth < 767) {
      this.isSmallScreen = 'true';
    } else {
      this.isSmallScreen = 'false';
    }
    this.myVariableSubject.next(this.isSmallScreen);
  }

  updateMyVariable(newValue: string) {
    this.myVariableSubject.next(newValue);
  }
}