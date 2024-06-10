import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { config } from '../../service/config';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-popup',
  templateUrl: './profile-popup.component.html',
  styleUrl: './profile-popup.component.css'
})
export class ProfilePopupComponent implements OnInit {
  selected:string = 'withdraw';
  depositForm !:FormGroup;
  btnLoading:boolean = false;
  isSpinning:boolean = false;
  displayedButtons:any = [
    100,
    500,
    1000,
    2000,
    10000,
    25000,
    30000,
    50000,
    75000,
  ];

  paymentGateway: any[] = [];
  showsubmitbtn: boolean = false;
  transcationId: any;
  transcationIdFinal: any;
  paymenting: any;
  paymentinput: boolean = true;
  private loaderSubscriber !: Subscription;
  // displayedButtons: any = [];
  @Input() profileRef :any;
  userData = JSON.parse(localStorage.getItem('userData')|| '');
  constructor(private fb:FormBuilder,private apiSer:ApiService){}
  ngOnInit(): void {
    this.depositForm = this.fb.group({
      Amount:["",Validators.required]
    });
    this.loaderSubscriber = this.apiSer.loaderService.loading$.subscribe((loading: any = {}) => {
      this.btnLoading = ('getPaymentGateway' in loading ) ? true : false;
      this.isSpinning = ('depositReq1' in loading ) ? true : false;
    });
  }
  addWallet(){
    if(this.depositForm.controls['Amount'].value <100){
      this.apiSer.showAlert('oops!','Deposit Amount should be ateast 100','warning');
      return ;
    }
    this.showsubmitbtn = true;
    
    let reqAmount = this.depositForm.controls['Amount'].value;
    localStorage.setItem("Amount",reqAmount);
    // this.apiSer.initHeaders.apply('Amount',reqAmount);
    this.apiSer.apiRequest(config['getPaymentGateway']).subscribe({
      next: data => {
        if (data) {
          this.paymentGateway = data
          this.showsubmitbtn = false;
          this.paymentinput = false;
        }
      },
      error: err => {
        this.apiSer.showAlert('Something Went Wrong', 'Please check your Internet Connection', 'error');
        this.showsubmitbtn = false;
      }
    });
  }
  finalDepositPro(item:any){
    this.isSpinning = true;
    let param = {"Amount":this.depositForm.controls['Amount'].value,"SiteName":item.SiteName}
      this.apiSer.apiRequest(config['depositReq1'], param).subscribe({
      next: data => {
        if (data.ErrorCode == '1') {
          let trans = data.Result.split("=");
          this.transcationId = trans[1];
          this.paymentinput = false;
          window.location.href = item.PaymentUrl + this.transcationId;
        } else {
          this.apiSer.showAlert(data.ErrorMessage, '', 'error');
        }
        this.isSpinning = false;
        this.paymenting = data;
        this.showsubmitbtn = false;
      },
      error: err => {
        this.isSpinning = false;
        this.showsubmitbtn = false;
        this.apiSer.showAlert('Something Went Wrong', 'Please check your internet connection', 'error');

      }
    });
  }
  setAmount(item:any){
    this.depositForm.controls['Amount'].setValue(item);
  }
}
