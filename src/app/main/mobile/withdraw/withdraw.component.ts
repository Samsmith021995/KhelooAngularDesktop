import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { config } from '../../service/config';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.css'
})
export class WithdrawComponent implements OnInit {
  @ViewChildren('bankDetailShow') bankshow!: QueryList<ElementRef<any>>;
  private loaderSubscriber !: Subscription;
  private apiSubscriber: Subscription[] = [];
  withdrawForm!: FormGroup;
  showsubmitbtn: boolean = false;
  isLoading: boolean = false;
  isStatusLoading: boolean = false;
  withdrawStatement: any;
  withdrawState: boolean = false;
  viewDetails: boolean = false;
  constructor(private fb: FormBuilder, private apiSer: ApiService, private renderer: Renderer2) { }
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
      Amount: ['0', Validators.required],
      IfscCode: ['', Validators.required],
    });
  }

  SubmitWithdrawRequest() {
    this.showsubmitbtn = true;
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
    if (this.withdrawForm.controls['Amount'].value < 1000) {
      this.apiSer.showAlert('Amount should be more than 1000', '', 'error');
      return;
    }
    if (!this.withdrawForm.controls['IfscCode'].value) {
      this.apiSer.showAlert('Please Fill the IFSC Code', '', 'error');
      return;
    }
    this.apiSer.apiRequest(config['withdrawReq'], this.withdrawForm.getRawValue()).subscribe({
      next: data => {
        if (data.ErrorCode == '1') {
          this.apiSer.showAlert(data.Result, data.ErrorMessage, 'success');
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
    this.apiSer.apiRequest(config['withdrawState']).subscribe({
      next: data => {
        this.withdrawStatement = data;
        this.withdrawState = true;
      },
      error: err => {
        this.apiSer.showAlert('Something Went Wrong', 'Please check your internet Connection', 'error');
      }
    })
  }
  reverseWithdraw() {
    //pending
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
