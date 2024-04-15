import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { config } from './config';
import { CommonServiceService } from './common-service.service';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComFunService {

  constructor(private apiSer:ApiService,private comSer:CommonServiceService,private router:Router,private http:HttpClient) { }

  login(param:any){
    this.apiSer.apiRequest(config['login'],param).subscribe({
      next: data=>{
        if(data.ErrorCode == '1'){
          // this.showsubmitbtn = false;
          this.comSer.saveData('UserId',data.UserId);
          this.comSer.saveData('LoginToken',data.LoginToken);
          this.comSer.saveData('name',data.UserName);
          this.apiSer.showAlert(data.ErrorMessage,'','success');
         //  this.apiSer.setUserDetails(data)
         this.refreshHeader();
          this.router.navigate(['/']);
        }else if(data.ErrorCode != '1'){
          this.apiSer.showAlert(data.ErrorMessage,'','error');
        }
      },
      error: err => {
        this.apiSer.showAlert('Something Went Wrong','','error');
      }
    });
  }
  refreshHeader() {
    let LoginToken = localStorage.getItem('LoginToken');
    if (LoginToken != '' && LoginToken != null) {
      this.comSer?.startloging('login');
    } else {
      this.comSer?.stoploging('login');
    }
  }
  getCDNData(dataType:any): Observable<any> {
    return this.http.get<any>('/assets/banner.json').pipe(
      map((data: any) => data[dataType]));
  }
}
