import { Component, OnInit,Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { config } from '../../service/config';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pop-register',
  templateUrl: './pop-register.component.html',
  styleUrl: './pop-register.component.css'
})
export class PopRegisterComponent implements OnInit {
  @Output() onCancel = new EventEmitter<any>();
  otpVerified:boolean = false;
  otpStart:boolean= false;
  registerForm !:FormGroup;
  constructor(private fb:FormBuilder,private apiSer:ApiService,private router:Router){}
  ngOnInit(): void {
    this.registerForm =  this.fb.group({
      Mobile:[''],
      OTP:['']
    });
  }
  GenerateOTP(){
    let param = this.registerForm.getRawValue();
    if (!this.registerForm.controls['Mobile'].value) {
      this.apiSer.showAlert('Please Provide the Mobile Number', '', 'warning');
      return;
    } 
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
          this.router.navigate(['/thanks-registration']);
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
