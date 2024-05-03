import { Component, OnInit,Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { config } from '../../service/config';
import { Subscription, catchError } from 'rxjs';
import { Router } from '@angular/router';
import { CommonServiceService } from '../../service/common-service.service';


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
  btnLoading1:boolean= false;
  showTimer:boolean= false;
  startSec:any;
  registerForm !:FormGroup;
  refText:string = '';
  constructor(private fb:FormBuilder,private apiSer:ApiService,private router:Router,private comSer:CommonServiceService){}
  ngOnInit(): void {
    this.loaderSubscriber = this.apiSer.loaderService.loading$.subscribe((loading:any={}) => {
      this.btnLoading=('otp' in loading || 'signUp' in loading)?true:false;
      this.btnLoading1=('verifyOtp' in loading)?true:false;
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
      DD:['',[Validators.required]],
      MM:['',[Validators.required]],
      year:['',[Validators.required]],
      Password:['',[Validators.required]],
      Ref:[this.refText],
    });
    this.registerForm.controls['Mobile'].valueChanges.subscribe(value=>{
      let strMo = String(value).trim();
      let digitsOnly = strMo.replace(/\D/g, '');
      if (digitsOnly && digitsOnly.length >= 10) {
        let trimmedValue = digitsOnly.substring(0, 10);
        this.registerForm.controls['Mobile'].setValue(trimmedValue, { emitEvent: false });
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
  GenerateOTP(){
    let param = this.registerForm.getRawValue();
    if (!this.registerForm.controls['Mobile'].value) {
      this.apiSer.showAlert('Please Provide the Mobile Number', '', 'warning');
      return;
    } 
    if (String(this.registerForm.controls['Mobile'].value).length < 10) {
      this.apiSer.showAlert('Please Provide the Valid Mobile Number', '', 'warning');
      return;
    } 

      this.apiSer.apiRequest(config['otp'], param).pipe(
        catchError((error) => {
          this.apiSer.showAlert('','You may only perform this action every 30 seconds', 'error');
          console.error('An error occurred:', error);
          throw error
        })
      ).subscribe((data) => {

        if (data.ErrorCode != '1') {
          this.apiSer.showAlert('', data.ErrorMessage, 'warning')
          return;
        }
        this.otpStart = true;
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
      });
  
  }
  getDOB(): string {
    const day = this.registerForm.controls['DD'].value;
    const month = this.registerForm.controls['MM'].value;
    const year = this.registerForm.controls['year'].value;
    const formattedDay = day.toString().padStart(2, '0');
    const formattedMonth = month.toString().padStart(2, '0');
      return `${formattedMonth}/${formattedDay}/${year}`;
    
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
    let param = {...this.registerForm.getRawValue(),DOB:this.getDOB()};
    if(!this.registerForm.controls['UserName'].value){
      this.apiSer.showAlert('Please Provide the UserName', '', 'warning')
      return;
    }
    if(!this.registerForm.controls['FName'].value){
      this.apiSer.showAlert('Please Provide the FName', '', 'warning')
      return;
    }
    if(!this.registerForm.controls['LName'].value){
      this.apiSer.showAlert('Please Provide the LName', '', 'warning')
      return;
    }
    if(!this.registerForm.controls['DD'].value || !this.registerForm.controls['MM'].value || !this.registerForm.controls['year'].value){
      this.apiSer.showAlert('Please Provide the DOB', '', 'warning')
      return;
    }
    if(!this.registerForm.controls['Password'].value){
      this.apiSer.showAlert('Please Provide the Password', '', 'warning')
      return;
    }
    if(this.registerForm.controls['Password'].value.length < 6){
      this.apiSer.showAlert('Password should be at least 6 characters long.', '', 'warning')
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
        if (data.ErrorCode != '1') {
          this.apiSer.showAlert(data.ErrorMessage, '', 'error');
          return;
        }
        this.comSer.saveData('Mobile',param.Mobile);
        this.comSer.saveData('Password',param.Password);

        this.closeDial();
        this.router.navigate(['/thankyou']);
        this.registerForm.reset();
      
      });
    } else {
      this.apiSer.showAlert('Please Provide Correct Details', '', 'warning');
    }
  }
  closeDial(){
    this.onCancel.emit();
  }
  prevStep(){
    this.otpVerified = !this.otpVerified;
  }
}
