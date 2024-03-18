import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { config } from '../../service/config';
import { Subscription, catchError } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-m-forgot-password',
  templateUrl: './m-forgot-password.component.html',
  styleUrl: './m-forgot-password.component.css'
})
export class MForgotPasswordComponent implements OnInit {
  @Output() onCancel = new EventEmitter<any>();
  forgotForm!: FormGroup;
  btnLoading: boolean = false;
  btnLoading1: boolean = false;
  otpVerify: boolean = false;
  private loaderSubscriber !: Subscription;
  private apiSubscriber: Subscription[]=[];
  constructor(private apiSer: ApiService, private fb: FormBuilder, private router: Router) { }
  ngOnInit(): void {
    this.loaderSubscriber = this.apiSer.loaderService.loading$.subscribe((loading:any={}) => {
      this.btnLoading=('generateForpass' in loading )?true:false;
      this.btnLoading1=('verifyOtppass' in loading )?true:false;
    });
    this.forgotForm = this.fb.group({
      Mobile: ["", [Validators.required]],
      Password: ["", [Validators.required]],
      OTP: ["", [Validators.required]],
    });
    this.forgotForm.controls['Mobile'].valueChanges.subscribe(value=>{
      let strMo = String(value).trim();
      let digitsOnly = strMo.replace(/\D/g, '');
      if (digitsOnly && digitsOnly.length >= 10) {
        let trimmedValue = digitsOnly.substring(0, 10);
        this.forgotForm.controls['Mobile'].setValue(trimmedValue, { emitEvent: false });
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
  GenerateOTP() {
    let param = this.forgotForm.getRawValue();
    if (!this.forgotForm.controls['Mobile'].value) {
      this.apiSer.showAlert('', 'Please Fill the Mobile Number', 'warning');
      return;
    }
    this.apiSer.apiRequest(config['generateForpass'], param).pipe(
      catchError((error) => {
        this.apiSer.showAlert('Something Went Wrong', '', 'error');
        this.btnLoading = false;
        console.error('An error occurred:', error);
        throw error
      })
    ).subscribe((data) => {
      if (data.n == '1') {
        this.apiSer.showAlert(data.RStatus,data.Msg , 'success');
        this.otpVerify = true;
      } else {
        this.apiSer.showAlert('', data.Msg, 'error');
      }
    }
    );

  }
  VerifyOTPForgotPassword() {
    let param = this.forgotForm.getRawValue();
    if (!this.forgotForm.controls['Mobile'].value) {
      this.otpVerify = true;
      this.apiSer.showAlert('', 'Please Fill the Mobile', 'warning');
      return;
    }
    if (!this.forgotForm.controls['OTP'].value) {
      this.otpVerify = true;
      this.apiSer.showAlert('', 'Please Fill the OTP', 'warning');
      return;
    }
    if (!this.forgotForm.controls['Password'].value) {
      this.apiSer.showAlert('', 'Please Fill the Password', 'warning');
      this.otpVerify = true;
      return;
    }
    if (this.forgotForm.controls['Password'].value.length < 6) {
      this.apiSer.showAlert('', 'Password should be at least 6 characters long.' , 'warning');
      this.otpVerify = true;
      return;
    }

    this.apiSer.apiRequest(config['verifyOtppass'], param).pipe(
      catchError((error) => {
        this.apiSer.showAlert('Something Went Wrong', 'Check your Internet Connection', 'error');
        this.btnLoading = false;
        throw error
      })
    ).subscribe(
      data => {
        if (data.n == '1') {
          this.apiSer.showAlert(data.RStatus,data.Msg , 'success');
          this.onCancel.emit();
          this.router.navigate(['/']);
        } else {
          this.apiSer.showAlert(data.RStatus,data.Msg , 'error');
        }
      });


  }
  closepopup(){
    this.onCancel.emit();
  }
}
