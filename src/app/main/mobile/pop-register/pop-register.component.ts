import { Component, OnInit,Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { config } from '../../service/config';
import { Subscription, catchError } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pop-register',
  templateUrl: './pop-register.component.html',
  styleUrl: './pop-register.component.css'
})
export class PopRegisterComponent implements OnInit {
  private loaderSubscriber !: Subscription;
  private apiSubscriber: Subscription[]=[];
  @Output() onCancel = new EventEmitter<any>();
  otpVerified:boolean = false;
  otpStart:boolean= false;
  btnLoading:boolean= false;
  showTimer:boolean= false;
  startSec:any;
  registerForm !:FormGroup;
  refText:string = '';
  constructor(private fb:FormBuilder,private apiSer:ApiService,private router:Router){}
  ngOnInit(): void {
    this.loaderSubscriber = this.apiSer.loaderService.loading$.subscribe((loading:any={}) => {
      this.btnLoading=('otp' in loading || 'verifyOtp' in loading || 'signUp' in loading)?true:false;
    });
    let ref = localStorage.getItem('Ref');
    if(ref){
      this.refText =  ref;
    }
    this.registerForm =  this.fb.group({
      Mobile:['',[Validators.required]],
      OTP:['',[Validators.required]],
      UserName:['',[Validators.required]],
      FName:['',[Validators.required]],
      LName:['',[Validators.required]],
      DOB:['',[Validators.required]],
      Password:['',[Validators.required]],
      Ref:[this.refText],
    });
  }
  GenerateOTP(){
    let param = this.registerForm.getRawValue();
    if (!this.registerForm.controls['Mobile'].value) {
      this.apiSer.showAlert('Please Provide the Mobile Number', '', 'warning');
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
 
      this.apiSer.apiRequest(config['otp'], param).pipe(
        catchError((error) => {
          this.apiSer.showAlert('Something Went Wrong', 'Check Your Internet Connection', 'error');
          console.error('An error occurred:', error);
          throw error
        })
      ).subscribe((data) => {

        if (data.ErrorCode != '1') {
          this.apiSer.showAlert('', data.ErrorMessage, 'warning')
          return;
        }
        this.otpStart = true;
      }
      );
  
  }
  VerifyOTP(){
    let param = this.registerForm.getRawValue();
    if (this.registerForm.controls['OTP'].value && this.registerForm.controls['Mobile'].value)  {
      this.apiSer.apiRequest(config['verifyOtp'], param).pipe(
        catchError((error) => {
          this.apiSer.showAlert('Something Went Wrong', 'Check Your Internet Connection', 'error');
          console.error('An error occurred:', error);
          throw error
        })
      ).subscribe(
        data => {
          if (data.ErrorCode != '1') {
            this.apiSer.showAlert(data.ErrorMessage, '', 'error');
            return;
          }
          this.otpVerified = true;
        });
    } else {
      if(!this.otpStart){
        this.apiSer.showAlert('Please Provide the Mobile Number', '', 'warning')
        return ; 
      }
      this.apiSer.showAlert('Please Provide the Otp', '', 'warning')
    }
  }
  Signup(){
    let param = this.registerForm.getRawValue();
    if(this.registerForm.controls['UserName'].value){
      this.apiSer.showAlert('Please Provide the UserName', '', 'warning')
      return;
    }
    if(this.registerForm.controls['FName'].value){
      this.apiSer.showAlert('Please Provide the FName', '', 'warning')
      return;
    }
    if(this.registerForm.controls['LName'].value){
      this.apiSer.showAlert('Please Provide the LName', '', 'warning')
      return;
    }
    if(this.registerForm.controls['DOB'].value){
      this.apiSer.showAlert('Please Provide the DOB', '', 'warning')
      return;
    }
    if(this.registerForm.controls['Password'].value){
      this.apiSer.showAlert('Please Provide the Password', '', 'warning')
      return;
    }
    if (this.registerForm.valid) {
      this.apiSer.apiRequest(config['signUp'], param).pipe(
        catchError((error) => {
          this.apiSer.showAlert('Something Went Wrong', 'Check Your Internet Connection', 'error');
          console.error('An error occurred:', error);
          throw error;
        })
      ).subscribe(data => {
        // if (data.ErrorCode != '1') {
          // this.apiSer.showAlert('', data.ErrorMessage, 'warning');
          // this.router.navigate(['/thanks-registration']);
          this.router.navigate(['/']);
          // return;
        // }
      });
    } else {
      this.apiSer.showAlert('Please Provide Correct Details', '', 'warning');
    }
  }
  closeDial(){
    this.onCancel.emit();
  }
}
