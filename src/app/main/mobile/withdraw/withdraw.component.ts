import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { config } from '../../service/config';
import { Subscription,catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.css'
})
export class WithdrawComponent implements OnInit {
  @ViewChildren('bankDetailShow') bankshow!: QueryList<ElementRef<any>>;
  private loaderSubscriber !: Subscription;
  private apiSubscriber: Subscription[] = [];
  ifscinvalid:boolean = false
  withdrawForm!: FormGroup;
  showsubmitbtn: boolean = false;
  isLoading: boolean = false;
  isStatusLoading: boolean = false;
  withdrawStatement: any;
  withdrawState: boolean = false;
  viewDetails: boolean = false;
  constructor(private fb: FormBuilder, private apiSer: ApiService, private renderer: Renderer2,public http: HttpClient) { }
  ngOnInit(): void {
    this.loaderSubscriber = this.apiSer.loaderService.loading$.subscribe((loading: any = {}) => {
      this.isLoading = ('withdrawReq' in loading) ? true : false;
      this.isStatusLoading = ('withdrawState' in loading) ? true : false;
    });
    this.withdrawForm = this.fb.group({
      AccountHolderName: ['', Validators.required],
      AccountNumber: ['', Validators.required],
      BankName: ['', Validators.required],
      BranchName: ['', Validators.required],
      Amount: ['', Validators.required],
      IfscCode: ['', Validators.required],
    });
  }

  // async SubmitWithdrawRequest() {
  //   this.ifscinvalid = false;
  //   this.showsubmitbtn = true;
  //   if (!this.withdrawForm.controls['AccountHolderName'].value) {
  //     this.apiSer.showAlert('Please Fill the Account Holder Name', '', 'error');
  //     return;
  //   }
  //   if (!this.withdrawForm.controls['AccountNumber'].value) {
  //     this.apiSer.showAlert('Please Fill the Account Number', '', 'error');
  //     return;
  //   }
  //   if (!this.withdrawForm.controls['BankName'].value) {
  //     this.apiSer.showAlert('Please Fill the Bank Name', '', 'error');
  //     return;
  //   }
  //   if (!this.withdrawForm.controls['BranchName'].value) {
  //     this.apiSer.showAlert('Please Fill the Branch Name', '', 'error');
  //     return;
  //   }
  //   if (this.withdrawForm.controls['Amount'].value < 100) {
  //     this.apiSer.showAlert('Amount should be more than 100', '', 'error');
  //     return;
  //   }
  //   if (!this.withdrawForm.controls['IfscCode'].value) {
  //     this.apiSer.showAlert('Please Fill the IFSC Code', '', 'error');
  //     return;
  //   }
  //   if(this.withdrawForm.controls['IfscCode'].value){
  //     let param = this.withdrawForm.controls['IfscCode'].value;
  //    await this.http.get('https://ifsc.razorpay.com/'+param).subscribe({
  //       next(value:any) {
  //       },
  //       error(err) {
  //         Swal.fire({
  //           title: 'IFSC Invalid',
  //           text: err.statusText,
  //           icon: 'error',
  //           timer: 2000,
  //           color: '#f4ad09',
  //           confirmButtonColor: '#f4ad09',
  //           showClass:
  //           {
  //             popup: 'swal2-show Ashutosh',
  //             backdrop: 'swal2-backdrop-show',
  //             icon: 'swal2-icon-show'
  //           },
  //           customClass: {
  //             confirmButton: 'custom-btn'
  //           }
  //         });
  //       },
  //     });
      
  //   }
  //   await  this.apiSer.apiRequest(config['withdrawReq'], this.withdrawForm.getRawValue()).subscribe({
  //        next: data => {
  //          if (data.ErrorCode == '1') {
  //            this.apiSer.showAlert(data.Result, data.ErrorMessage, 'success');
  //            this.withdrawForm.reset();
  //          } else {
  //            this.apiSer.showAlert('', data.ErrorMessage, 'error');
  //          }
  //          this.showsubmitbtn = false;
  //        },
  //        error: err => {
  //          this.apiSer.showAlert('Something Went Wrong', 'Please check your internet Connection', 'error');
  //          this.showsubmitbtn = false;
  //        }
  //      });
  //    }
  async SubmitWithdrawRequest() {
    this.ifscinvalid = false;
    this.showsubmitbtn = true;

    // Basic form validation
    if (!this.withdrawForm.controls['AccountHolderName'].value) {
      this.apiSer.showAlert('Please Fill the Account Holder Name', '', 'error');
      return;
    }
    if (!this.withdrawForm.controls['AccountNumber'].value) {
      this.apiSer.showAlert('Please Fill the Account Number', '', 'error');
      return;
    }
    if (!this.withdrawForm.controls['BankName'].value) {
      this.apiSer.showAlert('Please Fill the Bank Name', '', 'error');
      return;
    }
    if (!this.withdrawForm.controls['BranchName'].value) {
      this.apiSer.showAlert('Please Fill the Branch Name', '', 'error');
      return;
    }
    if (this.withdrawForm.controls['Amount'].value < 100) {
      this.apiSer.showAlert('Amount should be more than 100', '', 'error');
      return;
    }
    if (!this.withdrawForm.controls['IfscCode'].value) {
      this.apiSer.showAlert('Please Fill the IFSC Code', '', 'error');
      return;
    }

    // IFSC Code validation
    if (this.withdrawForm.controls['IfscCode'].value) {
      const param = this.withdrawForm.controls['IfscCode'].value;
      this.isLoading = true;
      try {
        const ifscResponse = await this.http.get(`https://ifsc.razorpay.com/${param}`).toPromise();
        // Continue with the next API call only if IFSC is valid
        console.log('IFSC is valid:', ifscResponse);
        this.isLoading = false;
      } catch (err) {
        // Handle invalid IFSC response
        Swal.fire({
          title: 'IFSC Invalid',
          text: 'Please enter valid ifsc code',
          icon: 'error',
          timer: 2000,
          color: '#f4ad09',
          confirmButtonColor: '#f4ad09',
          showClass: {
            popup: 'swal2-show Ashutosh',
            backdrop: 'swal2-backdrop-show',
            icon: 'swal2-icon-show'
          },
          customClass: {
            confirmButton: 'custom-btn'
          }
        });
        // Return early if the IFSC is invalid
        this.isLoading = false;
        this.showsubmitbtn = false;
        return;
      }
    }

    // Submit the withdrawal request if all validations pass
    await this.apiSer.apiRequest(config['withdrawReq'], this.withdrawForm.getRawValue()).subscribe({
      next: data => {
        if (data.ErrorCode == '1') {
          this.apiSer.showAlert(data.Result, data.ErrorMessage, 'success');
          this.withdrawForm.reset();
        } else {
          this.apiSer.showAlert('', data.ErrorMessage, 'error');
        }
        this.showsubmitbtn = false;
      },
      error: err => {
        this.apiSer.showAlert('Something Went Wrong', 'Please check your internet Connection', 'error');
        this.showsubmitbtn = false;
      }
    });
}

  withdrawStatus() {
    // this.api.loaderShow();
    this.withdrawState = true;
    this.apiSer.apiRequest(config['withdrawState']).subscribe({
      next: data => {
        this.withdrawStatement = data;
      },
      error: err => {
        this.apiSer.showAlert('Something Went Wrong', 'Please check your internet Connection', 'error');
      }
    })
  }
  reverseWithdraw(item:any) {
    let param = item;
    this.apiSer.apiRequest(config['cancelReq'],param).pipe(catchError((error)=>{
      throw error
    })).subscribe((data)=>{
      if(data.ErrorCode == '1'){
        this.apiSer.showAlert(data.ErrorMessage,'','success');
        this.withdrawStatus();
      }else{
        this.apiSer.showAlert(data.ErrorMessage,'','error');

      }
    });
  }
  bankStatus() {
    this.withdrawState = false;
  }
  viewDetail(item: any) {
    let nativeElement = this.bankshow.toArray()[item].nativeElement;
    if (nativeElement) {
      if (nativeElement.classList.contains('view')) {
        this.renderer.removeClass(nativeElement, 'view');
        return;
      }
      this.renderer.addClass(nativeElement, 'view');
    }
  }
}
