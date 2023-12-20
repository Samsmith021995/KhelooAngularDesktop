import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/main/service/api.service';
import { config } from 'src/app/main/service/config';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  private loaderSubscriber !: Subscription;
  private apiSubscriber: Subscription[]=[];
  btnLoading :boolean = false;
  forgotform !:FormGroup;
  otpVerify:boolean=false;
  
 typepass:string= 'password';
 typepass1:string= 'password';
 
  constructor(private fb:FormBuilder,private apiService:ApiService,private router:Router) { }
  ngOnInit() {
    this.loaderSubscriber = this.apiService.loaderService.loading$.subscribe((loading:any={}) => {
      this.btnLoading=('verifyOtppass' in loading || 'generateForpass' in loading )?true:false;
    });
    this.forgotform = this.fb.group({
      Mobile:["",[]],
      Password:["",[]],
      OTP:["",[]],
    });
  }

  onSubmit(){
    let param = this.forgotform.getRawValue();
    console.log();
    if(this.otpVerify){
      
      if(this.forgotform.controls['OTP'].value){
        this.apiService.apiRequest(config['verifyOtppass'],param).pipe(
          catchError((error)=>{
            this.apiService.showAlert('Something Went Wrong','','error');
            this.btnLoading=false; 
            throw error
          })
        ).subscribe(
          data =>{
            if(data.n == '1'){
              this.apiService.showAlert('',data.Msg,'success');
              this.router.navigate(['/']);
            }else{
              this.apiService.showAlert('',data.Msg,'error');
            }
            // this.otpVerify=false;
          });
      }else{
        this.otpVerify=true;
        this.apiService.showAlert('','Please Fill the OTP','warning');
      }
    }else{
      if(this.forgotform.controls['Mobile'].value){
        this.apiService.apiRequest(config['generateForpass'],param).pipe(
          catchError((error)=>{
            this.apiService.showAlert('Something Went Wrong','Check your Internet Connection','error');
            // this.btnLoading=false; 
            console.error('An error occurred:', error);
            throw error
          })
        ).subscribe((data)=>{
          if(data.n == '1'){
            this.otpVerify=true;
          }else{
            this.apiService.showAlert('',data.ErrorMessage,'error');
          }
        }
        );
      }else{
        this.apiService.showAlert('','Please Fill the Mobile Number','warning');
      }
    }
  }
  showPass(type:any){
    this.typepass = type === 'password'?'text':'password';
  }


  ngOnDestroy(): void {
    if (this.loaderSubscriber) {
      this.loaderSubscriber.unsubscribe();
    }
    if(this.apiSubscriber[0]) {
      this.apiSubscriber[0].unsubscribe();
    }
  }
}
