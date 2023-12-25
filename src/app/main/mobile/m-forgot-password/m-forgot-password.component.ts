import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { config } from '../../service/config';
import { catchError } from 'rxjs';
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
  otpVerify: boolean = false;
  constructor(private apiSer: ApiService, private fb: FormBuilder, private router: Router) { }
  ngOnInit(): void {
    this.forgotForm = this.fb.group({
      Mobile: ["", [Validators.required]],
      Password: ["", [Validators.required]],
      OTP: ["", [Validators.required]],
    });
  }
  GenerateOTP() {
    let param = this.forgotForm.getRawValue();
    if (!this.forgotForm.controls['Mobile'].value) {
      this.apiSer.showAlert('', 'Please Fill the Mobile Number', 'warning');
      return;
    }
    this.apiSer.apiRequest(config['generateForpass'], param).pipe(
      catchError((error) => {
        this.apiSer.showAlert('Something Went Wrong', 'Check your Internet Connection', 'error');
        this.btnLoading = false;
        console.error('An error occurred:', error);
        throw error
      })
    ).subscribe((data) => {
      if (data.ErrorCode == '1') {
        this.otpVerify = true;
      } else {
        this.apiSer.showAlert('', data.ErrorMessage, 'error');
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

    this.apiSer.apiRequest(config['verifyOtppass'], param).pipe(
      catchError((error) => {
        this.apiSer.showAlert('Something Went Wrong', 'Check your Internet Connection', 'error');
        this.btnLoading = false;
        throw error
      })
    ).subscribe(
      data => {
        if (data.ErrorCode == '1') {
          this.apiSer.showAlert('', data.ErrorMessage, 'success');
          this.onCancel.emit();
          this.router.navigate(['/']);
        } else {
          this.apiSer.showAlert('', data.ErrorMessage, 'error');
        }
      });


  }
  closepopup(){
    this.onCancel.emit();
  }
}
