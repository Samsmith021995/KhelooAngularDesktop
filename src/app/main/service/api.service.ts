import { Injectable, NgZone } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError, of,Subject,BehaviorSubject } from 'rxjs';
import { catchError, tap, delay } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CommonServiceService } from './common-service.service';
import { LoaderService } from './loader.service';
import { environment } from 'src/env/environments';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  showOptions: boolean = false;
  hideApp: boolean = false;
  public options: any;
  public headers_object: any;
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  constructor(public http: HttpClient,private router: Router,public loaderService: LoaderService,public commonSer:CommonServiceService) {
    const storedValue = localStorage.getItem('UserId');
    if (storedValue) {
      this.isLoggedInSubject.next(storedValue === 'true');
      this.updateLoginStatus(true);
    }
   }

   updateLoginStatus(isLoggedIn: boolean) {
      this.isLoggedInSubject.next(isLoggedIn);
  }
  initHeaders() {
    this.headers_object = new HttpHeaders();
    if (localStorage.getItem('UserId')) {
      this.headers_object = this.headers_object.append('Token', localStorage.getItem('LoginToken'));
      this.headers_object = this.headers_object.append('userid', localStorage.getItem('UserId'));
      let urlPath = window.location.pathname;
      this.headers_object = this.headers_object.append('sitePath',urlPath);
    }
    this.options = {
      headers: this.headers_object
    };
  }

  apiRequest(apiData: any, body?: any): Observable<any> {
    this.initHeaders();
    this.loaderService?.startLoading(apiData['keyL']);
    let httpMethod;
    switch (apiData['type']) {
      case 'POST':
      httpMethod = this.http.post(environment.apiUrl + apiData['endURL'], body, this.options);
      break;
      case 'GET':
      let gBody = body?this.commonSer.setForGet(body):'';
      // console.log(environment.apiUrl + apiData['endURL'] + gBody)
      httpMethod = this.http.get(environment.apiUrl + apiData['endURL'] + gBody, this.options);
      break;
      default:
      throw new Error('Method not supported');
    }
    
    return httpMethod.pipe(
      tap(response => {
        this.loaderService?.stopLoading(apiData['keyL']);
      }),
      catchError(error => {
        // this.loaderService?.stopLoading(apiData['keyL']);
        throw this.handleError(error);
      })
      );
    }

    handleError(error: HttpErrorResponse) {
      if(error.status==401){
        this.commonSer.clearLocalVars();
        this.router.navigate(['/login']);
      }
      let errorMsg: string;
      if (error.error instanceof ErrorEvent) {
        errorMsg='An error occurred:', error.error.message;
      } else {
        errorMsg=`Backend returned code ${error.status}, `+`body was: ${error.error}`;
      }
      return throwError(() => new Error(errorMsg));
    }

    

    checkLogin(){
      if (localStorage.getItem('UserId')) {
        return true;
      }
      return false;
    }  

    logout(){
      this.commonSer.clearLocalVars();
      window.location.reload();
    }

    showAlert(titleTest:any,msg:any,iconText:any){
      Swal.fire({
        title: titleTest,
        text: msg,
        icon: iconText,
        // timer: 2000,
        color:'#f4ad09',
        confirmButtonColor:'#f4ad09',
        showClass:
        {
          popup: 'swal2-show Ashutosh',
          backdrop: 'swal2-backdrop-show',
          icon: 'swal2-icon-show'
        },
  // customClass:'Ashutosh',
  customClass:{
    confirmButton:'custom-btn'
  }
      });
    }

}
