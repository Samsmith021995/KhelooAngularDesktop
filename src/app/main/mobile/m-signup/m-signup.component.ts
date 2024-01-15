import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { config } from '../../service/config';
import { Router } from '@angular/router';
import { Subscription, retry } from 'rxjs';

@Component({
  selector: 'app-m-signup',
  templateUrl: './m-signup.component.html',
  styleUrl: './m-signup.component.css',
  encapsulation: ViewEncapsulation.None
})
export class MSignupComponent implements OnInit {
  getcodeBtn:boolean = false;
  otpVerify:boolean  = false;
  inputText: string = '';
  refText: any;
  btnLoading:boolean=false;
  inputVerify:boolean  = false;
  showTimer:boolean  = false;
  verificationCode:boolean  = false;
  signUp !:FormGroup;
  slidesPerViewn:number = 1;
  startSec:any;
  pagination:boolean = false;
  images = [
    '/assets/images/sign-up-bg-new1.jpg',
    '/assets/images/sign-up-bg-new2.jpg',
    '/assets/images/sign-up-bg-new3.jpg',
    '/assets/images/sign-up-bg-new4.jpg',
  ];
  private loaderSubscriber !: Subscription;
  private apiSubscriber: Subscription[]=[];
  constructor(private fb:FormBuilder,private apiSer:ApiService,private router:Router){}
  ngOnInit(): void {
    let ref = localStorage.getItem('Ref');
    if(ref){
      this.refText =  ref;
    }
    this.signUp = this.fb.group({
      UserName:['',[Validators.required]],
      FName:['',[Validators.required]],
      LName:['',[Validators.required]],
      DOB:['',[Validators.required]],
      Ref:[this.refText,],
      Password:['',[Validators.required]],
      Mobile:['',[Validators.required]],
      OTP:['',[Validators.required]],
    });
    this.signUp.controls['Mobile'].valueChanges.subscribe(value=>{
      let strMo = String(value);
      if (strMo && strMo.length >= 10) {
        let trimmedValue = strMo.substring(0, 10);
        this.signUp.controls['Mobile'].setValue(trimmedValue, { emitEvent: false });
        this.getcodeBtn = true;
    }
    });
    this.loaderSubscriber = this.apiSer.loaderService.loading$.subscribe((loading:any={}) => {
      this.btnLoading=('verifyOtp' in loading || 'signUp' in loading)?true:false;
    });
  }
  validateNumber(event: KeyboardEvent) {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete'];
    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }
  getCode(){
    let param = this.signUp.getRawValue();
    if(!this.signUp.controls['Mobile'].value){
      this.apiSer.showAlert('Mobile should not be blank','','error');
      return;
    }
    this.showTimer = true;
    let seconds = 60;

    const intervalId = setInterval(() => {
      if (seconds > 0) {
        seconds--;
        this.startSec = seconds;
      } else {
        clearInterval(intervalId);
        this.showTimer = false;
      }
    }, 1000);
    this.apiSer.apiRequest(config['otp'],param).subscribe({
      next:(data)=>{
        if(data.ErrorCode != '1'){
          this.apiSer.showAlert('',data.ErrorMessage,'error');
          return ;
        }
        this.inputVerify = true;
      },
      error:(err)=>{
        console.error(err);
      }
      
    });
  }
  onSubmit(){
    let param = this.signUp.getRawValue();
    if(!this.signUp.controls['Mobile'].value){
      this.apiSer.showAlert('Mobile should not be blank','','error');
      return;
    }
    if(!this.signUp.controls['OTP'].value){
      this.apiSer.showAlert('OTP should not be blank','','error');
      return;
    }



    if(!this.otpVerify && !this.verificationCode){
      this.apiSer.apiRequest(config['verifyOtp'],param).subscribe({
        next:(data)=>{
          if(data.ErrorCode != '1'){
            this.apiSer.showAlert('',data.ErrorMessage,'error');
            return;
          }
          this.otpVerify = true;
          this.inputVerify = false;
          this.verificationCode = true;
        },
        error:(err)=>{
          console.error(err);
        }
      });
    }else{
      if(!this.signUp.controls['UserName'].value){
        this.apiSer.showAlert('UserName should not be blank','','error');
        return;
      }
      if(!this.signUp.controls['FName'].value){
        this.apiSer.showAlert('FName should not be blank','','error');
        return;
      }
      if(!this.signUp.controls['LName'].value){
        this.apiSer.showAlert('LName should not be blank','','error');
        return;
      }
      if(!this.signUp.controls['DOB'].value){
        this.apiSer.showAlert('DOB should not be blank','','error');
        return;
      }
      if(!this.signUp.controls['Password'].value){
        this.apiSer.showAlert('Password should not be blank','','error');
        return;
      }
      this.apiSer.apiRequest(config['signUp'],param).subscribe({
        next:(data)=>{
          this.router.navigate(['/thank-you']);
        },
        error:(err)=>{

        }
      })
    }
  }
  // onInput(): void {
  //   // Limit the input length to 10 characters
  //   if (this.inputText.length > 10) {
  //     this.inputText = this.inputText.substring(0, 10);
  //   }
  // }
}
