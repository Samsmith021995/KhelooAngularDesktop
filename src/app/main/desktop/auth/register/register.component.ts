import { Component } from '@angular/core';
import { FormBuilder,FormControlName,FormGroup, Validators,AbstractControl ,ValidatorFn} from '@angular/forms'
import { ApiService } from 'src/app/main/service/api.service';
import { config } from 'src/app/main/service/config';
import { Subscription, catchError } from 'rxjs';
import { Router } from '@angular/router';
const USER_KEY = 'auth-user';
const passwordMatchValidator: ValidatorFn = (control: AbstractControl): {[key: string]: any} | null => {
  let password = control.get('password')?.value;
  let confirmPassword = control.get('OTP')?.value;

  return password !== confirmPassword ? { mismatch: true } : null;
};
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  Swal :any;
  showVerification = false;
  showRegister = false;
  
  private loaderSubscriber !: Subscription;
  private apiSubscriber: Subscription[] = [];
  registerForm !: FormGroup;
   mobilenumber : any;
   refText:string='';
   otpVerify: boolean = false;
   formDetails: boolean = false;
   typepass: string = 'password';
   typepass1: string = 'password';
   isAuthLoading:boolean = false;
   passwordtype = "password";
   passwordtvisibility = "fa fa-eye";
   passwordtype1 = "password";
   passwordtvisibility1 = "fa fa-eye";


  private phoneNumberKey = 'mobilenumber';
  constructor(private fb:FormBuilder,private apiSer:ApiService,private router:Router){
  
 
    

  }

  ngOnInit(): void {
    let ref = localStorage.getItem('Ref');
    if(ref){
      this.refText =  ref;
    }
    this.loaderSubscriber = this.apiSer.loaderService.loading$.subscribe((loading: any = {}) => {
      this.isAuthLoading = ('verifyOtp' in loading || 'otp' in loading || 'signUp' in loading) ? true : false;
    });
    this.registerForm = this.fb.group({
      UserName: ["", [Validators.required]],
      FName: ["", [Validators.required]],
      LName: ["", [Validators.required]],
      Mobile: ["", [Validators.required]],
      Password: ["", [Validators.required]],
      Ref: [this.refText,],
      ConfirmPassword: ["", [Validators.required]],
      DOB: ["", [Validators.required]],
      OTP: ["", [Validators.required]],

    },{
      validators: passwordMatchValidator

    }
    );

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
    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }
  onSubmit(){
    let param = this.registerForm.getRawValue();
    if (this.otpVerify) {
      this.otpVerify = false;
      if (this.registerForm.controls['OTP'].value) {
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
            this.formDetails = true;
          });
      } else {
        this.apiSer.showAlert('Please Provide the Otp', '', 'warning')
      }
    } else if (this.formDetails) {
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
            this.router.navigate(['/thank-you']);
            // return;
          // }
        });
      } else {
        this.apiSer.showAlert('Please Provide Correct Details', '', 'warning');
      }
    } else {
      if (this.registerForm.controls['Mobile'].value) {
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
          this.otpVerify = true;

        }
        );
      } else {
        this.apiSer.showAlert('Please Provide the Mobile Number', '', 'warning');
      }
    }
  }
  showPass(type: any) {
    this.typepass = type === 'password' ? 'text' : 'password';
  }
  showPass1(type: any) {
    this.typepass1 = type === 'password' ? 'text' : 'password';
  }
  

}
