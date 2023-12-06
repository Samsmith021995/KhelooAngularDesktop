import { Injectable } from '@angular/core';
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
    window.addEventListener('resize', () => {
      let screenWidth = window.screen.width;
      console.log("check event"+screenWidth);
      if(screenWidth < 767){
        this.isSmallScreen = 'true';
      }else{
        this.isSmallScreen = 'false';  
      }
      this.myVariableSubject.next(this.isSmallScreen);
    });
  }
  updateMyVariable(newValue: string) {
    this.myVariableSubject.next(newValue);
  }
}
