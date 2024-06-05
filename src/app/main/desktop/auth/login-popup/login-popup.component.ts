import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { loginStart } from '../state/auth.actions';
import { ApiService } from 'src/app/main/service/api.service';
import { config } from 'src/app/main/service/config';
import { Subscription, catchError } from 'rxjs';
import { CommonServiceService } from 'src/app/main/service/common-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrl: './login-popup.component.css'
})
export class LoginPopupComponent  implements OnInit{
  otp: string[] = ['', '', '', '', '', ''];
  @ViewChildren('otpInput') otpInputs!: QueryList<ElementRef>;
  date = null;
  isEnglish = false;
  loginForm!:FormGroup;
  registerForm!:FormGroup;
  size: 'default' = 'default';
  getOtp:boolean = false;
  verifyOtp:boolean = false;
  btnLoading:boolean = false;
  loginLoading:boolean = false;
  private loaderSubscriber !: Subscription;
  constructor(private fb:FormBuilder,private fb1:FormBuilder,private store:Store<AppState>,private apiSer:ApiService,private commonSer:CommonServiceService,private router:Router){

  }
  ngOnInit(): void {

    this.loginForm = this.fb.group({
      Mobile:['', [Validators.required]],
      Password:['', [Validators.required]]
    });
    this.registerForm = this.fb1.group({
      Mobile:['', [Validators.required]],
      otp:['', [Validators.required]],
      otp2:['', [Validators.required]],
      otp3:['', [Validators.required]],
      otp4:['', [Validators.required]],
      otp5:['', [Validators.required]],
      otp6:['', [Validators.required]],
      FName:['', [Validators.required]],
      LName:['', [Validators.required]],
      Password:['', [Validators.required]],
      Ref:['', [Validators.required]],
      DOB:[new Date() ],
      // DOB1:['', [Validators.required]]
    });

    this.store.select(state => state.auth).subscribe(authState => {
      if (authState.loggedIn) {
        console.log("login")
      }
    });
    this.registerForm.controls['Mobile'].valueChanges.subscribe(value => {
      let strMo = String(value);
      if (strMo && strMo.length >= 10) {
        let trimmedValue = strMo.substring(0, 10);
        this.registerForm.controls['Mobile'].setValue(trimmedValue, { emitEvent: false });
        // this.getcodeBtn = true;
      }
    });
    this.loaderSubscriber = this.apiSer.loaderService.loading$.subscribe((loading: any = {}) => {
      this.btnLoading = ('otp' in loading || 'verifyOtp' in loading || 'signUp' in loading) ? true : false;
      this.loginLoading = ('login' in loading ) ? true : false;
    });

  }
  moveToNext(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    if (input.value.length > 1) {
      input.value = input.value.slice(0, 1);
    }
    if (input.value && index < 5) {
      this.otpInputs.toArray()[index + 1].nativeElement.focus();
    }
  }
  LoginForm(){
    const Mobile = this.loginForm.controls['Mobile'].value;
    const Password = this.loginForm.controls['Password'].value;
    this.store.dispatch(loginStart({Mobile,Password}));
  }
  submitRegForm(){
    let param = this.registerForm.getRawValue();
    if(!this.getOtp && !this.verifyOtp ){
      this.apiSer.apiRequest(config['otp'], param).pipe(catchError((error) => {
        this.apiSer.showAlert('', 'You may only perform this action every 30 seconds', 'error');
        throw error;
      })).subscribe({
        next: (data) => {
          if (data.ErrorCode != '1') {
            this.apiSer.showAlert('', data.ErrorMessage, 'error');
            return;
          }
          // this.showTimer = true;
          // let seconds = 60;
          // const intervalId = setInterval(() => {
          //   if (seconds > 0) {
          //     seconds--;
          //     this.startSec = seconds;
          //   } else {
          //     clearInterval(intervalId);
          //     this.showTimer = false;
          //   }
          // }, 1000);
          // this.inputVerify = true;
          this.getOtp = true;
        },
        error: (err) => {
          console.error(err);
        }
  
      });
    }else if(this.getOtp && !this.verifyOtp){
      this.apiSer.apiRequest(config['verifyOtp'], param).subscribe({
        next: (data) => {
          this.verifyOtp=true;
          // if (data.ErrorCode != '1') {
          //   this.apiSer.showAlert('', data.ErrorMessage, 'error');
          //   return;
          // }
          // this.otpVerify = true;
          // this.inputVerify = false;
          // this.verificationCode = true;
        },
        error: (err) => {
          console.error(err);
        }
      });
    }else if(this.getOtp && this.verifyOtp){
      this.apiSer.apiRequest(config['signUp'], param).subscribe({
        next: (data) => {
          if(data.ErrorCode != '1'){
            this.apiSer.showAlert('', data.ErrorMessage, 'error');
            return;
          }
          this.commonSer.saveData('Mobile',param.Mobile);
          this.commonSer.saveData('Password',param.Password);
          this.router.navigate(['/thankyou']);
        },
        error: (err) => {

        }
      });
    }
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

  
}
