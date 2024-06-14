import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { config } from '../../service/config';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.css'
})
export class DepositComponent implements OnInit {
  weight = 40;
  height = 160;
  result = 0;
  myWeight = '';
  bmi = '';
  centimeter = 0;
  meter = 0;
  transcationId: any;
  transcationIdFinal: any;
  paymentGateway: any[] = [];
  paymenting: any;
  paymentinput: boolean = true;
  showsubmitbtn: boolean = false;
  isLoading: boolean = false;
  private loaderSubscriber !: Subscription;
  private apiSubscriber: Subscription[] = [];
  constructor(private fb: FormBuilder, private apiSer: ApiService,) {

  }
  ngOnInit(): void {
    this.loaderSubscriber = this.apiSer.loaderService.loading$.subscribe((loading: any = {}) => {
      this.isLoading = ('depositReq1' in loading || 'getTranscationId' in loading || 'getPaymentGateway' in loading) ? true : false;
    });
  }
  deposits = this.fb.group({
    Amount: ['100', Validators.required],
    ramount: ['100'],
  });

  WeightvalueChanged(e: any) {
    this.weight = (e);
  }

  showValWeight1(e: any) {
    this.weight = (e);
  }

  setAmount(amount: any) {
    this.deposits.controls['Amount'].setValue(amount);
  }

  requestDeposit() {
    this.paymentinput = false;
    this.showsubmitbtn = true;
    this.apiSer.apiRequest(config['getPaymentGateway']).subscribe({
      next: data => {
        if (data) {
          this.paymentGateway = data;
          data.forEach((element:any) => {
            this.finalpayProcess1(element);
            console.log(element);
          });
        }
      },
      error: err => {
        this.apiSer.showAlert('Something Went Wrong', 'Please check your Internet Connection', 'error');
      }
    });
    // this.apiSer.apiRequest(config['depositReq'], this.deposits.value).subscribe({
    //   next: data => {
    //     if (data.ErrorCode == '1') {
    //       let trans = data.Result.split("=");
    //       this.transcationId = trans[1];
    //       this.paymentinput = false;
    //       // this.getFinalId({ transactionid: this.transcationId })
    //     } else {
    //       this.apiSer.showAlert(data.ErrorMessage, '', 'error');
    //     }
    //     this.paymenting = data;
    //     this.showsubmitbtn = false;
    //   },
    //   error: err => {
    //     this.showsubmitbtn = false;
    //     this.apiSer.showAlert('Something Went Wrong', 'Please check your internet connection', 'error');

    //   }
    // });
  }
  finalpayProcess(item:any){
    let param = {"Amount":this.deposits.controls['Amount'].value,"SiteName":item.SiteName}
      this.apiSer.apiRequest(config['depositReq1'], param).subscribe({
      next: data => {
        if (data.ErrorCode == '1') {
          let trans = data.Result.split("=");
          this.transcationId = trans[1];
          this.paymentinput = false;
          // this.getFinalId({ transactionid: this.transcationId })
          window.location.href = item.PaymentUrl + this.transcationId;
        } else {
          this.apiSer.showAlert(data.ErrorMessage, '', 'error');
        }
        this.paymenting = data;
        this.showsubmitbtn = false;
      },
      error: err => {
        this.showsubmitbtn = false;
        this.apiSer.showAlert('Something Went Wrong', 'Please check your internet connection', 'error');

      }
    });
  }
  finalpayProcess1(item:any){
    let param = {"Amount":this.deposits.controls['Amount'].value,"SiteName":item.SiteName}
      this.apiSer.apiRequest(config['depositReq1'], param).subscribe({
      next: data => {
        if (data.ErrorCode == '1') {
          let trans = data.Result.split("=");
          this.transcationId = trans[1];
          this.paymentinput = false;
          console.log(data);
          // this.getFinalId({ transactionid: this.transcationId })
          // window.location.href = item.PaymentUrl + this.transcationId;
        } else {
          this.apiSer.showAlert(data.ErrorMessage, '', 'error');
        }
        this.paymenting = data;
        this.showsubmitbtn = false;
      },
      error: err => {
        this.showsubmitbtn = false;
        this.apiSer.showAlert('Something Went Wrong', 'Please check your internet connection', 'error');

      }
    });
  }


  // getFinalId(param: any) {
  //   this.apiSer.apiRequest(config['getTranscationId'], param).subscribe({
  //     next: data => {
  //       if (data.ErrorCode == '1') {
  //         let trans = data.Result.split("=");
  //         this.transcationIdFinal = trans[1];
  //         this.paymentinput = false;
  //         this.getPaymentGateway();
  //       } else {
  //         this.apiSer.showAlert(data.ErrorMessage, '', 'error');
  //       }
  //     },
  //     error: err => {
  //       this.apiSer.showAlert('Something Went Wrong', 'Please check your Internet Connection', 'error');
  //     }
  //   });
  // }


  // getPaymentGateway() {
  //   this.apiSer.apiRequest(config['getPaymentGateway']).subscribe({
  //     next: data => {
  //       if (data) {
  //         this.paymentGateway = data
  //       }
  //     },
  //     error: err => {
  //       this.apiSer.showAlert('Something Went Wrong', 'Please check your Internet Connection', 'error');
  //     }
  //   });
  // }
}
