import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { flush } from '@angular/core/testing';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subscription, catchError } from 'rxjs';
import { ApiService } from 'src/app/main/service/api.service';
import { ComFunService } from 'src/app/main/service/com-fun.service';
import { config } from 'src/app/main/service/config';

@Component({
  selector: 'app-forgot-popup',
  templateUrl: './forgot-popup.component.html',
  styleUrl: './forgot-popup.component.css'
})
export class ForgotPopupComponent implements OnInit {
  @ViewChildren('otpInput') otpInputs!: QueryList<ElementRef>;
  otp: string[] = ['', '', '', '', '', ''];
  showPass:boolean = false;
  btnLoading:boolean = false;
  forgotForm!:FormGroup;
  getOtp:boolean =false;
  verifyOtp:boolean =false;
  private loaderSubscriber !: Subscription;
  constructor(private fb:FormBuilder,private apiSer:ApiService,private router:Router,private msg:NzMessageService,private dialog:MatDialog,private comFun:ComFunService){ }
  cdn: string = this.comFun.cdn;
  ngOnInit(): void {
    this.loaderSubscriber = this.apiSer.loaderService.loading$.subscribe((loading: any = {}) => {
      this.btnLoading = ('generateForpass' in loading || 'verifyOtppass' in loading ) ? true : false;
    });
    this.forgotForm = this.fb.group({
      Mobile:["",[Validators.required,Validators.minLength(10)]],
      otpArray: this.fb.array(
        Array(6).fill('').map(() => this.fb.control('', [Validators.required]))
      ),
      OTP: ['', [Validators.required]],
      Password:["",Validators.required],
    });
    this.forgotForm.controls['otpArray'].valueChanges.subscribe(values => {
      let combinedOtp = values.join('');
      if(combinedOtp.length >6){
        combinedOtp = combinedOtp.substring(0,6);
      }
      this.forgotForm.controls['OTP'].setValue(combinedOtp);
    });
    this.forgotForm.controls['Mobile'].valueChanges.subscribe(value => {
      let strMo = String(value);
      if (strMo && strMo.length >= 10) {
        let trimmedValue = strMo.substring(0, 10);
        this.forgotForm.controls['Mobile'].setValue(trimmedValue, { emitEvent: false });
      }
    });
  }
  submitForgotForm(){
    let param = this.forgotForm.getRawValue();
    if(!this.getOtp && !this.verifyOtp){
      if (!this.forgotForm.controls['Mobile'].value || (this.forgotForm.controls['Mobile'].value).length < 10) {
        this.forgotForm.controls['Mobile'].markAsDirty();
        this.forgotForm.controls['Mobile'].updateValueAndValidity({ onlySelf: true });
        return
      }
      this.apiSer.apiRequest(config['generateForpass'],param).pipe(
        catchError((error)=>{
          this.msg.error('You may only perform this action every 30 seconds',{nzDuration:3000,nzPauseOnHover:true});
          this.btnLoading=false; 
          console.error('An error occurred:', error);
          throw error
        })
      ).subscribe((data)=>{
        if(data.n == '1'){
          this.getOtp = true;
        }else{
          this.msg.error(data.Msg,{nzDuration:3000,nzPauseOnHover:true});
        }
      }
      );
    }else if(this.getOtp && !this.verifyOtp){
      if (!this.forgotForm.controls['OTP'].value ||(this.forgotForm.controls['OTP'].value).length < 6 ) {
        this.forgotForm.controls['OTP'].markAsDirty();
        this.forgotForm.controls['OTP'].updateValueAndValidity({ onlySelf: true });
        return
      }
      if (!this.forgotForm.controls['Password'].value) {
        this.forgotForm.controls['Password'].markAsDirty();
        this.forgotForm.controls['Password'].updateValueAndValidity({ onlySelf: true });
        return
      }
      this.apiSer.apiRequest(config['verifyOtppass'],param).pipe(
        catchError((error)=>{
          this.msg.error('Something Went Wrong',{nzDuration:3000,nzPauseOnHover:true});
          this.btnLoading=false; 
          throw error
        })
      ).subscribe(
        data =>{
          if(data.n == '1'){
            this.msg.success(data.Msg,{nzDuration:3000});
            this.dialog.closeAll();
            this.router.navigate(['/']);
          }else{
            this.msg.error(data.Msg,{nzDuration:3000,nzPauseOnHover:true});
          }
          // this.otpVerify=false;
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
  moveToNext(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.slice(0, 1);
    if (input.value.length === 1 && index < this.otpInputs.length - 1) {
      this.otpInputs.toArray()[index + 1].nativeElement.focus();
    }

  }
  get otpArray() {
    return this.forgotForm.get('otpArray') as FormArray;
  }
}
