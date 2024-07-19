import { Component, ElementRef, Input, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { loginStart } from '../state/auth.actions';
import { ApiService } from 'src/app/main/service/api.service';
import { config } from 'src/app/main/service/config';
import { Subscription, catchError } from 'rxjs';
import { CommonServiceService } from 'src/app/main/service/common-service.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NzTabSetComponent } from 'ng-zorro-antd/tabs';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ComFunService } from 'src/app/main/service/com-fun.service';
@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrl: './login-popup.component.css'
})
export class LoginPopupComponent implements OnInit {
  otp: string[] = ['', '', '', '', '', ''];
  @ViewChildren('otpInput') otpInputs!: QueryList<ElementRef>;
  @ViewChild('forgetPop') forgetPop !: TemplateRef<any>;
  @ViewChild('tabset') tabset!: NzTabSetComponent;
  @Input() selecttab!: number;
  date = null;
  isEnglish = false;
  showPass:boolean = false;
  showPass1:boolean = false;
  loginForm!: FormGroup;
  registerForm!: FormGroup;
  size: 'default' = 'default';
  getOtp: boolean = false;
  verifyOtp: boolean = false;
  btnLoading: boolean = false;
  loginLoading: boolean = false;
  private loaderSubscriber !: Subscription;
  constructor(private comFun:ComFunService,private fb: FormBuilder, private fb1: FormBuilder, private store: Store<AppState>, private apiSer: ApiService, private commonSer: CommonServiceService, private router: Router, private dialog: MatDialog,private msg:NzMessageService) {

  }
  cdn: string = this.comFun.cdn;
  ngOnInit(): void {

    this.loginForm = this.fb.group({
      Mobile: ['', [Validators.required,Validators.minLength(10)]],
      Password: ['', [Validators.required]]
    });
    this.registerForm = this.fb1.group({
      Mobile: ['', [Validators.required,Validators.minLength(10)]],
      otpArray: this.fb.array(
        Array(6).fill('').map(() => this.fb.control('', [Validators.required]))
      ),
      OTP: ['', [Validators.required]],
      UserName: ['', [Validators.required]],
      FName: ['', [Validators.required]],
      LName: ['', [Validators.required]],
      Password: ['', [Validators.required]],
      Ref: [''],
      DOB: [null,[Validators.required]],
      // DOB1:['', [Validators.required]]
    });

    this.store.select(state => state.auth).subscribe(authState => {
      if (authState.loggedIn) {
        console.log("login")
      }
    });
    this.loginForm.controls['Mobile'].valueChanges.subscribe(value => {
      let strMo = String(value);
      if (strMo && strMo.length >= 10) {
        let trimmedValue = strMo.substring(0, 10);
        this.loginForm.controls['Mobile'].setValue(trimmedValue, { emitEvent: false });
        // this.getcodeBtn = true;
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
      this.loginLoading = ('login' in loading) ? true : false;
    });

    this.registerForm.controls['otpArray'].valueChanges.subscribe(values => {
      let combinedOtp = values.join('');
      if (combinedOtp.length > 6) {
        combinedOtp = combinedOtp.substring(0, 6);
      }
      this.registerForm.controls['OTP'].setValue(combinedOtp);
    });
  }
  get otpArray() {
    return this.registerForm.get('otpArray') as FormArray;
  }

  moveToNext(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.slice(0, 1);
    if (input.value.length === 1 && index < this.otpInputs.length - 1) {
      this.otpInputs.toArray()[index + 1].nativeElement.focus();
    }

  }
  LoginForm() {
    const Mobile = this.loginForm.controls['Mobile'].value;
    const Password = this.loginForm.controls['Password'].value;
    this.store.dispatch(loginStart({ Mobile, Password }));
  }
  markAllFieldsAsTouched() {
    Object.values(this.registerForm.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormArray) {
        control.controls.forEach(subControl => subControl.markAsTouched());
      }
    });
  }
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
  submitRegForm() {
    // if (this.registerForm.invalid) {
    //   // Mark all fields as touched to trigger validation messages
    //   this.markAllFieldsAsTouched();
    //   return;
    // }
    let param = this.registerForm.getRawValue();
    if (!this.getOtp && !this.verifyOtp) {
      if (!this.registerForm.controls['Mobile'].value || (this.registerForm.controls['Mobile'].value).length < 10) {
        this.registerForm.controls['Mobile'].markAsDirty();
        this.registerForm.controls['Mobile'].updateValueAndValidity({ onlySelf: true });
        return
      }
      this.apiSer.apiRequest(config['otp'], param).pipe(catchError((error) => {
        this.msg.info('You may only perform this action every 30 seconds',{nzDuration:3000} );
        throw error;
      })).subscribe({
        next: (data) => {
          if (data.ErrorCode != '1') {
            this.msg.error( data.ErrorMessage,{nzDuration:3000});
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
    } else if (this.getOtp && !this.verifyOtp) {
      if (!this.registerForm.controls['OTP'].value ||(this.registerForm.controls['OTP'].value).length < 6 ) {
        this.registerForm.controls['OTP'].markAsDirty();
        this.registerForm.controls['OTP'].updateValueAndValidity({ onlySelf: true });
        return
      }
      this.apiSer.apiRequest(config['verifyOtp'], param).subscribe({
        next: (data) => {
          if (data.ErrorCode != '1') {
            this.msg.warning(data.ErrorMessage, {nzDuration:3000,nzAnimate:true,nzPauseOnHover:true});
            return;
          }
          this.verifyOtp = true;
        },
        error: (err) => {
          console.error(err);
        }
      });
    } else if (this.getOtp && this.verifyOtp) {
      if (!this.registerForm.controls['UserName'].value) {
        this.registerForm.controls['UserName'].markAsDirty();
        this.registerForm.controls['UserName'].updateValueAndValidity({ onlySelf: true });
        return
      }
      if (!this.registerForm.controls['FName'].value) {
        this.registerForm.controls['FName'].markAsDirty();
        this.registerForm.controls['FName'].updateValueAndValidity({ onlySelf: true });
        return
      }
      if (!this.registerForm.controls['LName'].value) {
        this.registerForm.controls['LName'].markAsDirty();
        this.registerForm.controls['LName'].updateValueAndValidity({ onlySelf: true });
        return
      }
      if (!this.registerForm.controls['Password'].value) {
        this.registerForm.controls['Password'].markAsDirty();
        this.registerForm.controls['Password'].updateValueAndValidity({ onlySelf: true });
        return
      }
      if (!this.registerForm.controls['DOB'].value) {
        this.registerForm.controls['DOB'].markAsDirty();
        this.registerForm.controls['DOB'].updateValueAndValidity({ onlySelf: true });
        return
      }

      this.apiSer.apiRequest(config['signUp'], param).subscribe({
        next: (data) => {
          if (data.ErrorCode != '1') {
            this.msg.error( data.ErrorMessage, {nzDuration:3000,nzAnimate:true,nzPauseOnHover:true});
            return;
          }
          this.commonSer.saveData('Mobile', param.Mobile);
          this.commonSer.saveData('Password', param.Password);
          this.dialog.closeAll();
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
  forgetpassword() {
    let dialogRef = this.dialog.open(this.forgetPop, {
      width: '1200px'
    })
    dialogRef.afterClosed().subscribe(() => { });

  }
  openDatePicker() {
    const input = document.querySelector('input[type="date"]') as HTMLInputElement;
    if (input) {
      input.click();
    }
  }
}
