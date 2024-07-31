import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CommonServiceService } from './common-service.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router,private commonSer:CommonServiceService,private msg:NzMessageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.body && event.body.Result === 'Unauthorized') {
            this.msg.success('Please login again',{nzDuration:3000});
            this.logout();
          }
        }
      },
      (error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

  private logout() {
    this.commonSer.clearLocalVars();
    window.location.reload();
  }
}
