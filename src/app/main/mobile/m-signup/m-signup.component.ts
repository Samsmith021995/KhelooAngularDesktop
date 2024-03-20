import { Component, OnInit, ViewEncapsulation,ViewChild,ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { config } from '../../service/config';
import { Router } from '@angular/router';
import { Subscription, catchError, retry } from 'rxjs';
import { CommonServiceService } from '../../service/common-service.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import * as moment from 'moment';
@Component({
  selector: 'app-m-signup',
  templateUrl: './m-signup.component.html',
  styleUrl: './m-signup.component.css',
  encapsulation: ViewEncapsulation.None
})
export class MSignupComponent implements OnInit {
  // @ViewChild('digit2Input' , { static: false }) digit2Input!: ElementRef<HTMLInputElement>;
  // @ViewChild('digit2Input2' , { static: false }) digit2Input2!: ElementRef<HTMLInputElement>;
  // @ViewChild('digit2Input3' , { static: false }) digit2Input3!: ElementRef<HTMLInputElement>;
  // @ViewChild('digit2Input4' , { static: false }) digit2Input4!: ElementRef<HTMLInputElement>;
  // @ViewChild('digit2Input5' , { static: false }) digit2Input5!: ElementRef<HTMLInputElement>;
  // @ViewChild('digit2Input6' , { static: false }) digit2Input6!: ElementRef<HTMLInputElement>;
  getcodeBtn: boolean = false;
  otpVerify: boolean = false;
  inputText: string = '';
  refText: any;
  btnLoading: boolean = false;
  inputVerify: boolean = false;
  showTimer: boolean = false;
  getTimer: boolean = false;
  verificationCode: boolean = false;
  signUp !: FormGroup;
  slidesPerViewn: number = 1;
  startSec: any;
  pagination: boolean = false;
  datepicker: any = new Date();
  passwordShow:boolean= true;
  images = [
    '/assets/images/sign-up-bg-new1.jpg',
    '/assets/images/sign-up-bg-new2.jpg',
    '/assets/images/sign-up-bg-new3.jpg',
    '/assets/images/sign-up-bg-new4.jpg',
  ];
  private loaderSubscriber !: Subscription;
  private apiSubscriber: Subscription[] = [];
  isSmallScreen!: boolean;
  constructor(private fb: FormBuilder, private apiSer: ApiService, private router: Router, private commonSer: CommonServiceService, private breakpointObserver: BreakpointObserver) { }
  ngOnInit(): void {
    this.commonSer.myVariable$.subscribe((width) => {
      this.isSmallScreen = width === "true";
      // let isSmallScreen2 = this.breakpointObserver.isMatched('(max-width: 767px)');
      // console.log(isSmallScreen2);
    });
    let ref = localStorage.getItem('Ref');
    if (ref) {
      this.refText = ref;
    }
    this.signUp = this.fb.group({
      UserName: ['', [Validators.required]],
      FName: ['', [Validators.required]],
      LName: ['', [Validators.required]],
      DOB: ["", [Validators.required]],
      Ref: [this.refText,],
      Password: ['', [Validators.required]],
      Mobile: ['', [Validators.required]],
      OTP1: ['', [Validators.required]],
      OTP2: ['', [Validators.required]],
      OTP3: ['', [Validators.required]],
      OTP4: ['', [Validators.required]],
      OTP5: ['', [Validators.required]],
      OTP6: ['', [Validators.required]],
      acceptterm: [false, [Validators.required]],
    });
    this.signUp.controls['Mobile'].valueChanges.subscribe(value => {
      let strMo = String(value);
      if (strMo && strMo.length >= 10) {
        let trimmedValue = strMo.substring(0, 10);
        this.signUp.controls['Mobile'].setValue(trimmedValue, { emitEvent: false });
        this.getcodeBtn = true;
      }
    });
    this.signUp.controls['OTP6'].valueChanges.subscribe(value => {
      let strMo = String(value);
      if (strMo && strMo.length >= 0) {
        let trimmedValue = strMo.substring(0, 1);
        this.signUp.controls['OTP6'].setValue(trimmedValue, { emitEvent: false });
        // this.getcodeBtn = true;
      }
    });
    this.signUp.controls['OTP1'].valueChanges.subscribe(value => {
      let strMo = String(value);
      if (strMo && strMo.length >= 0) {
        let trimmedValue = strMo.substring(0, 1);
        this.signUp.controls['OTP1'].setValue(trimmedValue, { emitEvent: false });
        // this.getcodeBtn = true;
      }
    });
    this.signUp.controls['OTP2'].valueChanges.subscribe(value => {
      let strMo = String(value);
      if (strMo && strMo.length >= 0) {
        let trimmedValue = strMo.substring(0, 1);
        this.signUp.controls['OTP2'].setValue(trimmedValue, { emitEvent: false });
        // this.getcodeBtn = true;
      }
    });
    this.signUp.controls['OTP3'].valueChanges.subscribe(value => {
      let strMo = String(value);
      if (strMo && strMo.length >= 0) {
        let trimmedValue = strMo.substring(0, 1);
        this.signUp.controls['OTP3'].setValue(trimmedValue, { emitEvent: false });
        // this.getcodeBtn = true;
      }
    });
    this.signUp.controls['OTP4'].valueChanges.subscribe(value => {
      let strMo = String(value);
      if (strMo && strMo.length >= 0) {
        let trimmedValue = strMo.substring(0, 1);
        this.signUp.controls['OTP4'].setValue(trimmedValue, { emitEvent: false });
        // this.getcodeBtn = true;
      }
    });
    this.signUp.controls['OTP5'].valueChanges.subscribe(value => {
      let strMo = String(value);
      if (strMo && strMo.length >= 0) {
        let trimmedValue = strMo.substring(0, 1);
        this.signUp.controls['OTP5'].setValue(trimmedValue, { emitEvent: false });
        // this.getcodeBtn = true;
      }
    });
    this.loaderSubscriber = this.apiSer.loaderService.loading$.subscribe((loading: any = {}) => {
      this.btnLoading = ('verifyOtp' in loading || 'signUp' in loading) ? true : false;
    });
    this.loaderSubscriber = this.apiSer.loaderService.loading$.subscribe((loading: any = {}) => {
      this.getTimer = ('otp' in loading) ? true : false;
    });
  }
  mergeOtpValues() {
    const otp1 = this.signUp.controls['OTP1']?.value || '';
    const otp2 = this.signUp.controls['OTP2']?.value || '';
    const otp3 = this.signUp.controls['OTP3']?.value || '';
    const otp4 = this.signUp.controls['OTP4']?.value || '';
    const otp5 = this.signUp.controls['OTP5']?.value || '';
    const otp6 = this.signUp.controls['OTP5']?.value || '';

    const mergedOtp = `${otp1}${otp2}${otp3}${otp4}${otp5}${otp6}`;
    // Assign the merged OTP to another form control if needed
    return mergedOtp;
    // console.log(mergedOtp);
    // this.signUp.controls['OTP'].setValue(mergedOtp);
  }
  focusNext(event: any, nextField: number) {
    const inputValue = event.target.value;
    if (inputValue.length > 0) {
      const nextInput = document.getElementById(`OTP${nextField}`) as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    }
  }
  onLastInput(event: any) {
    const inputValue = event.target.value;
    if (inputValue.length > 0) {
      // console.log('Last Input:', this.signUp.value);
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
  // getDOB(): string {
  //   const day = this.signUp.controls['DD'].value;
  //   const month = this.signUp.controls['MM'].value;
  //   const year = this.signUp.controls['year'].value;
  //   const formattedDay = day.toString().padStart(2, '0');
  //   const formattedMonth = month.toString().padStart(2, '0');
  //     return `${formattedMonth}/${formattedDay}/${year}`;

  // }
  getCode(check?:boolean) {
    if(!this.signUp.controls['acceptterm'].value){
      this.apiSer.showAlert('','Please Accept term & Condition','warning')
      return
    }
    let param = this.signUp.getRawValue();
    if (!this.signUp.controls['Mobile'].value) {
      this.apiSer.showAlert('Mobile should not be blank', '', 'error');
      return;
    }
    if (!(this.signUp.controls['Mobile'].value).length) {
      this.apiSer.showAlert('Please Enter Valid Mobile Number', '', 'error');
      return;
    }
    this.apiSer.apiRequest(config['otp'], param).pipe(catchError((error) => {
      this.apiSer.showAlert('', 'You may only perform this action every 30 seconds', 'error');
      throw error;
    })).subscribe({
      next: (data) => {
        if (data.ErrorCode != '1') {
          this.apiSer.showAlert('', data.ErrorMessage, 'error');
          return;
        }
        this.signUp.controls['OTP1'].setValue(''); 
        this.signUp.controls['OTP2'].setValue(''); 
        this.signUp.controls['OTP3'].setValue(''); 
        this.signUp.controls['OTP4'].setValue(''); 
        this.signUp.controls['OTP5'].setValue(''); 
        this.signUp.controls['OTP6'].setValue(''); 
        if(check){
          this.apiSer.showAlert('', data.ErrorMessage, 'success');

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
        this.inputVerify = true;
      },
      error: (err) => {
        console.error(err);
      }

    });
  }
 
  onSubmit() {
    // if(!this.inputVerify){
    //   console.log("Ashu");
    //     this.showTimer = true;
    //   this.inputVerify = true;
    // }else{
this.mergeOtpValues();
    let param = this.signUp.getRawValue();
    console.log(param);

    param.DOB = param.DOB ? moment(this.signUp.controls['DOB'].value).format('MM/DD/YYYY') : ''
    param.OTP = this.mergeOtpValues();
    if (!this.signUp.controls['Mobile'].value) {
      this.apiSer.showAlert('Mobile should not be blank', '', 'error');
      return;
    }
    if (!this.signUp.controls['OTP1'].value) {
      this.apiSer.showAlert('OTP should not be blank', '', 'error');
      return;
    }
    if (!this.signUp.controls['OTP2'].value) {
      this.apiSer.showAlert('OTP should not be blank', '', 'error');
      return;
    }
    if (!this.signUp.controls['OTP3'].value) {
      this.apiSer.showAlert('OTP should not be blank', '', 'error');
      return;
    }
    if (!this.signUp.controls['OTP4'].value) {
      this.apiSer.showAlert('OTP should not be blank', '', 'error');
      return;
    }

    if (!this.otpVerify && !this.verificationCode) {
      this.apiSer.apiRequest(config['verifyOtp'], param).subscribe({
        next: (data) => {
          // if (data.ErrorCode != '1') {
          //   this.apiSer.showAlert('', data.ErrorMessage, 'error');
          //   return;
          // }
          this.otpVerify = true;
          this.inputVerify = false;
          this.verificationCode = true;
        },
        error: (err) => {
          console.error(err);
        }
      });
    } else {
      if (!this.signUp.controls['UserName'].value) {
        this.apiSer.showAlert('UserName should not be blank', '', 'error');
        return;
      }
      if (!this.signUp.controls['FName'].value) {
        this.apiSer.showAlert('FName should not be blank', '', 'error');
        return;
      }
      if (!this.signUp.controls['LName'].value) {
        this.apiSer.showAlert('LName should not be blank', '', 'error');
        return;
      }
      if (!this.signUp.controls['DOB'].value) {
        this.apiSer.showAlert('DOB should not be blank', '', 'error');
        return;
      }
      if (!this.signUp.controls['Password'].value) {
        this.apiSer.showAlert('Password should not be blank', '', 'error');
        return;
      }

      this.apiSer.apiRequest(config['signUp'], param).subscribe({
        next: (data) => {
          this.router.navigate(['/thankyou']);
        },
        error: (err) => {

        }
      })
    // }

  }

  }
  // onInput(): void {
  //   // Limit the input length to 10 characters
  //   if (this.inputText.length > 10) {
  //     this.inputText = this.inputText.substring(0, 10);
  //   }
  // }
}
