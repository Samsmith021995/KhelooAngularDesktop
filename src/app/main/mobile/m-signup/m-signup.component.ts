import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { config } from '../../service/config';
import { Router } from '@angular/router';
import { Subscription, retry } from 'rxjs';

@Component({
  selector: 'app-m-signup',
  templateUrl: './m-signup.component.html',
  styleUrl: './m-signup.component.css'
})
export class MSignupComponent implements OnInit {
  getcodeBtn:boolean = false;
  otpVerify:boolean  = false;
  inputText: string = '';
  refText: any;
  btnLoading:boolean=false;
  inputVerify:boolean  = false;
  verificationCode:boolean  = false;
  signUp !:FormGroup;
  slidesPerViewn:number = 1;
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
      this.btnLoading=('otp' in loading || 'verifyOtp' in loading || 'signUp' in loading)?true:false;
    });
  }
  getCode(){
    let param = this.signUp.getRawValue();
    if(!this.signUp.controls['Mobile'].value){
      this.apiSer.showAlert('Mobile should not be blank','','error');
      return;
    }
    this.apiSer.apiRequest(config['otp'],param).subscribe({
      next:(data)=>{
        this.apiSer.showAlert('',data.ErrorMessage,'error');
        if(data.ErrorCode != '1'){
          this.inputVerify = true;
        }
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
    if(this.otpVerify && !this.verificationCode){
      this.apiSer.apiRequest(config['verifyOtp'],param).subscribe({
        next:(data)=>{
          this.otpVerify = true;
          this.inputVerify = false;
          this.verificationCode = true;
        },
        error:(err)=>{
          console.error(err);
        }
      });
    }else{
      this.apiSer.apiRequest(config['signUp'],param).subscribe({
        next:(data)=>{
          this.router.navigate(['/']);
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
