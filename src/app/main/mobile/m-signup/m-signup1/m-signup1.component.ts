import { Component, OnInit, ViewEncapsulation,ViewChild,Input,Output,ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../service/api.service';
import { config } from '../../../service/config';
import { Router } from '@angular/router';
import { Subscription, catchError, retry } from 'rxjs';
import { CommonServiceService } from '../../../service/common-service.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import * as moment from 'moment';
import { SharedModule } from 'src/app/main/shared/shared.module';
import Swiper from 'swiper';
import { Vimeo } from 'vimeo';
@Component({
  selector: 'app-m-signup1',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './m-signup1.component.html',
  styleUrl: './m-signup1.component.css'
})
export class MSignup1Component implements OnInit ,AfterViewInit{
  refHave: boolean = false;
  hidePassword:boolean = false;
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
  newDob:string ='';
  images = [
    '/assets/images/promotionNew.jpeg',
  ];
  @ViewChild('swiper', { static: false }) swiperEl?: ElementRef<any>;
  swiper?: Swiper;
  autoplayTimeout: any;
  classRemove:boolean = false;
  prevNext:boolean = true;


  private loaderSubscriber !: Subscription;
  private apiSubscriber: Subscription[] = [];
  isSmallScreen!: boolean;
  constructor(private fb: FormBuilder, private apiSer: ApiService, private router: Router, private commonSer: CommonServiceService, private breakpointObserver: BreakpointObserver) {
    const today = new Date();
    let nineteenYearsAgo = new Date(today.getFullYear() - 19, today.getMonth(), today.getDate());

    // Format the date
  this.newDob = this.formatDate(nineteenYearsAgo);

   }
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
      OTP: ['', [Validators.required]],
      acceptterm: [true, [Validators.required]],
    });
    this.signUp.controls['Mobile'].valueChanges.subscribe(value => {
      let strMo = String(value);
      if (strMo && strMo.length >= 10) {
        let trimmedValue = strMo.substring(0, 10);
        this.signUp.controls['Mobile'].setValue(trimmedValue, { emitEvent: false });
        this.getcodeBtn = true;
      }
    });
    this.loaderSubscriber = this.apiSer.loaderService.loading$.subscribe((loading: any = {}) => {
      this.btnLoading = ('verifyOtp' in loading || 'signUp' in loading || 'signUp1' in loading || 'otp' in loading) ? true : false;
    });
    this.loaderSubscriber = this.apiSer.loaderService.loading$.subscribe((loading: any = {}) => {
      this.getTimer = ('otp' in loading) ? true : false;
    });
  }
  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const day = date.getDate().toString().padStart(2, '0');
    return `${month}/${day}/${year}`;
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
  getCode() {
    let param = this.signUp.getRawValue();
    if (!this.signUp.controls['Mobile'].value) {
      this.apiSer.showAlert('Mobile should not be blank', '', 'error');
      return;
    }

    if (this.signUp.controls['Mobile'].value.length < 10) {
      this.apiSer.showAlert('Please enter valid Mobile Number', '', 'error');
      return;
    }
    this.signUp.controls['UserName'].disable();
    this.signUp.controls['Mobile'].disable();
    this.signUp.controls['Password'].disable();

    this.apiSer.apiRequest(config['otp'], param).pipe(catchError((error) => {
      this.apiSer.showAlert('', 'You may only perform this action every 30 seconds', 'error');
      throw error;
    })).subscribe({
      next: (data) => {
        if (data.ErrorCode != '1') {
          this.apiSer.showAlert('', data.ErrorMessage, 'error');
          return;
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
    let param = this.signUp.getRawValue();
    param.DOB = param.DOB ? moment(this.signUp.controls['DOB'].value).format('MM/DD/YYYY') : moment(this.newDob).format('MM/DD/YYYY');

    if (!this.signUp.controls['UserName'].value) {
      this.apiSer.showAlert('UserName should not be blank', '', 'error');
      return;
    }
    if (!this.signUp.controls['Mobile'].value) {
      this.apiSer.showAlert('Mobile should not be blank', '', 'error');
      return;
    }
    if (String(this.signUp.controls['Mobile'].value).length < 10 ) {
      this.apiSer.showAlert('Please Provide Valid Number', '', 'error');
      return;
    }
    if (!this.signUp.controls['Password'].value) {
      this.apiSer.showAlert('Password should not be blank', '', 'error');
      return;
    }
    if(!this.signUp.controls['acceptterm'].value){
      this.apiSer.showAlert('','Please Accept term & Condition','warning')
      return
    }

    if (!this.inputVerify ) {
      this.apiSer.apiRequest(config['otp'], param).pipe(catchError((error) => {
        this.apiSer.showAlert('', 'You may only perform this action every 30 seconds', 'error');
        throw error;
      })).subscribe({
        next: (data) => {
          if (data.ErrorCode != '1') {
            this.apiSer.showAlert('', data.ErrorMessage, 'error');
            return;
          }
          this.signUp.controls['UserName'].disable();
          this.signUp.controls['Mobile'].disable();
          this.signUp.controls['Password'].disable();
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
    } else {
      this.apiSer.apiRequest(config['verifyOtp'], param).subscribe({
        next: (data) => {
          if (data.ErrorCode != '1') {
            this.apiSer.showAlert('', data.ErrorMessage, 'error');
            return;
          }
          this.apiSer.apiRequest(config['signUp1'], param).subscribe({
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
              console.error(err);
    
            }
          });
          this.otpVerify = true;
          this.inputVerify = false;
          this.verificationCode = true;
        },
        error: (err) => {
          console.error(err);
        }
      });
    
      // if (!this.signUp.controls['FName'].value) {
      //   this.apiSer.showAlert('FName should not be blank', '', 'error');
      //   return;
      // }
      // if (!this.signUp.controls['LName'].value) {
      //   this.apiSer.showAlert('LName should not be blank', '', 'error');
      //   return;
      // }
      // if (!this.signUp.controls['DOB'].value) {
      //   this.apiSer.showAlert('DOB should not be blank', '', 'error');
      //   return;
      // }
   

    }
  }
     
  ngAfterViewInit() {
    this.swiper = new Swiper(this.swiperEl?.nativeElement, {
      ...(this.prevNext ? { 
        navigation: {
          // nextEl: '.swiper-button-next',
          // prevEl: '.swiper-button-prev',
        },
      } : {}),
      ...(this.pagination ? {
        
        pagination: {
            el: '.swiper-pagination',
        },
    } : {}),
     
      scrollbar: {
        el: '.swiper-scrollbar',
      },
     
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
        pauseOnMouseEnter:true,
      },
      loop: true,
      // slidesPerView: this.slidesPerView,
      // spaceBetween: 3,
    });
   

 
  }



  checkStatus(){
    this.classRemove = true;
    if (this.swiper) {
      this.swiper.autoplay.stop();
      clearTimeout(this.autoplayTimeout);
      this.autoplayTimeout = setTimeout(() => {
        if (this.swiper) {
          this.swiper.autoplay.start();
          this.classRemove = false;
        }
      }, 39000);
    }
  }

}
