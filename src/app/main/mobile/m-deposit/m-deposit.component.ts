import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { config } from '../../service/config';
import { ApiService } from '../../service/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-m-deposit',
  templateUrl: './m-deposit.component.html',
  styleUrl: './m-deposit.component.css'
})
export class MDepositComponent implements OnInit {
  depositForm!:FormGroup;
  showsubmitbtn:boolean = false;
  transcationId: any;
  transcationIdFinal: any;
  paymentGateway: any[] = [];
  paymenting: any;
  paymentinput: boolean = true;
  isLoading: boolean = false;
  private loaderSubscriber !: Subscription;
  private apiSubscriber: Subscription[] = [];
  constructor(private fb:FormBuilder,private apiSer:ApiService){}
  ngOnInit(): void {
    this.depositForm = this.fb.group({
      Amount:['',[Validators.required]]
    });
  }
  MrequestDeposit(){
    this.showsubmitbtn = true;
    this.apiSer.apiRequest(config['depositReq'], this.depositForm.getRawValue()).subscribe({
      next: data => {
        if (data.ErrorCode == '1') {
          let trans = data.Result.split("=");
          this.transcationId = trans[1];
          this.paymentinput = false;
          this.getFinalId({ transactionid: this.transcationId })
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
  getFinalId(param: any) {
    this.apiSer.apiRequest(config['getTranscationId'], param).subscribe({
      next: data => {
        if (data.ErrorCode == '1') {
          let trans = data.Result.split("=");
          this.transcationIdFinal = trans[1];
          this.paymentinput = false;
          this.getPaymentGateway();
        } else {
          this.apiSer.showAlert(data.ErrorMessage, '', 'error');
        }
      },
      error: err => {
        this.apiSer.showAlert('Something Went Wrong', 'Please check your Internet Connection', 'error');
      }
    });
  }
  getPaymentGateway() {
    this.apiSer.apiRequest(config['getPaymentGateway']).subscribe({
      next: data => {
        if (data) {
          this.paymentGateway = data
        }
      },
      error: err => {
        this.apiSer.showAlert('Something Went Wrong', 'Please check your Internet Connection', 'error');
      }
    });
  }
  setAmount(amount: any) {
    this.depositForm.controls['Amount'].setValue(amount);
  }
}
