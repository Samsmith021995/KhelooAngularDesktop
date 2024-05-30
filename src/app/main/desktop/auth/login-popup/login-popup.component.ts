import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { loginStart } from '../state/auth.actions';
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
  constructor(private fb:FormBuilder,private fb1:FormBuilder,private store:Store<AppState>){

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

  }

  
}
