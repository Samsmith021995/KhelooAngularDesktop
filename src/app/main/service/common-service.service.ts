import { Injectable, HostListener, OnInit } from '@angular/core';
import { BehaviorSubject, fromEvent, merge, Observable,Subject } from 'rxjs';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { config } from './config';
;
@Injectable({
  providedIn: 'root'
})
export class CommonServiceService implements OnInit{

  private myVariableSubject = new BehaviorSubject<string>('initialValue');
  myVariable$ = this.myVariableSubject.asObservable();
  isSmallScreen!:string
  constructor() {
    this.init();
  }

  private init() {
    fromEvent(window, 'resize').subscribe((event: Event) => {
      this.checkScreenSize();
    });
    this.checkScreenSize();
  }
ngOnInit(): void {
  
}
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    let screenWidth = window.innerWidth;
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

  private logingSubject = new BehaviorSubject<{ [key: string]: boolean }>({});
  public loging$ = this.logingSubject.asObservable();
  
  startloging(keyid: string) {
    const loging = this.logingSubject.value;
    this.logingSubject.next({
      ...loging,
      [keyid]: true
    });
  }
  stoploging(keyid: string) {
    const logArr = this.logingSubject.value;
    delete logArr[keyid];
    this.logingSubject.next(logArr);
  }

  setForGet(obj:any){
    return ('?' + Object.entries(obj).map(([key, value]) => `${key}=${value}`).join('&'));
  }

  setLogDetails(data:any){
    localStorage.setItem('UserName',data.UserName);
    localStorage.setItem('LoginToken',data.LoginToken);
    localStorage.setItem('userbalance',data.userbalance);
    localStorage.setItem('UserId',data.UserId);
  }
  
  clearLocalVars(){
    localStorage.clear();
    sessionStorage.clear();
  }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getData(key: string) {
    return localStorage.getItem(key)
  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }

  private searchSubject = new Subject<any>();
  search$ = this.searchSubject.asObservable();

  sendSearchData(search: any) {
    this.searchSubject.next(search);
  }
  // login(){
  //   let mob = localStorage.getItem('Mobile');
  //   let pass = localStorage.getItem('Password');
  //   let param = {Mobile:mob,Password:pass};
  //     this.apiSer.apiRequest(config['login'],param).subscribe({
        
  //     next: data=>{
        
  //       if(data.ErrorCode == '1'){
  //         // this.showsubmitbtn = false;
  //         this.saveData('UserId',data.UserId);
  //         this.saveData('LoginToken',data.LoginToken);
  //         this.saveData('name',data.UserName);
  //         this.apiSer.showAlert(data.ErrorMessage,'','success');
  //       //  this.onBack();
  //       //  this.loginCheck.emit();
  //         this.router.navigate(['/']);
  //       }else if(data.ErrorCode != '1'){
  //         this.apiSer.showAlert(data.ErrorMessage,'','error');
          
  //       }
  //     },
  //     error: err => {
  //       this.apiSer.showAlert('Something Went Wrong','','error');
  //     }
  //   });
  // }
}