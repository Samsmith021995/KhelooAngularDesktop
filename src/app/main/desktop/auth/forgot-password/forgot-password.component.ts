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
export class ForgotPasswordComponent  implements OnInit{
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
      Mobile:["",[Validators.required]],
      Password:["",[Validators.required]],
      OTP:["",[Validators.required]],
    });
    this.forgotform.controls['Mobile'].valueChanges.subscribe(value=>{
      let strMo = String(value).trim();
      let digitsOnly = strMo.replace(/\D/g, '');
      if (digitsOnly && digitsOnly.length >= 10) {
        let trimmedValue = digitsOnly.substring(0, 10);
        this.forgotform.controls['Mobile'].setValue(trimmedValue, { emitEvent: false });
    }
    });
  }
  validateNumber(event: KeyboardEvent) {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete'];
    
    const isCopy = event.ctrlKey && event.key === 'c';
    const isPaste = event.ctrlKey && event.key === 'v';
    const isCmdCopy = event.metaKey && event.key === 'c'; 
    const isCmdPaste = event.metaKey && event.key === 'v'; 
    const isCmdselect = event.metaKey && event.key === 'a'; 
    const isSelect = event.ctrlKey && event.key === 'a'; 
  
    if (!allowedKeys.includes(event.key) && !isCopy && !isPaste && !isCmdCopy && !isCmdPaste && !isCmdselect && !isSelect) {
      event.preventDefault();
    }
  }

  onSubmit(){
    let param = this.forgotform.getRawValue();
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
        // this.apiService.showAlert('','Please Fill the OTP','warning');
      }
    }else{
      if(this.forgotform.controls['Mobile'].value){
        this.apiService.apiRequest(config['generateForpass'],param).pipe(
          catchError((error)=>{
            this.apiService.showAlert('Something Went Wrong','','error');
            this.btnLoading=false; 
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
        // this.apiService.showAlert('','Please Fill the Mobile Number','warning');
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
