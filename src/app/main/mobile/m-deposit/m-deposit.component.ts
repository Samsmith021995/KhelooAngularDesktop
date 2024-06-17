import { Component, OnInit ,OnDestroy} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { config } from '../../service/config';
import { ApiService } from '../../service/api.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-m-deposit',
  templateUrl: './m-deposit.component.html',
  styleUrl: './m-deposit.component.css'
})
export class MDepositComponent implements OnInit, OnDestroy {
  depositForm!: FormGroup;
  showsubmitbtn: boolean = false;
  transcationId: any;
  transcationIdFinal: any;
  paymentGateway: any[] = [];
  paymenting: any;
  paymentinput: boolean = true;
  isLoading: boolean = false;
  private loaderSubscriber !: Subscription;
  private apiSubscriber: Subscription[] = [];
  mainAmount:string ='';
  amountChecker:number = 0
  buttonsNumber:any = [
    100,
    500,
    1000,
    2000,
    10000,
    25000,
    30000,
    50000,
    75000,
  ]
  numberOfButtonsToShow: number = 0;
  displayedButtons: any = [];
  constructor(private fb: FormBuilder, private apiSer: ApiService,private router:ActivatedRoute) { }
  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.amountChecker = parseInt(params['amount']);
      this.mainAmount = params['amount'];
      this.setDisplayedButtons(this.amountChecker);
  
    });
    this.loaderSubscriber = this.apiSer.loaderService.loading$.subscribe((loading: any = {}) => {
      this.isLoading = ('depositReq1' in loading) ? true : false;
      
    });
    this.depositForm = this.fb.group({
      Amount: [this.mainAmount, [Validators.required]]
    });
  }
  setDisplayedButtons(amount: number): void {
    let filteredButtons = this.buttonsNumber.filter((button:any) => button > amount);
    this.displayedButtons = filteredButtons.slice(0, 4);
  }
  MrequestDeposit() {
    if(this.depositForm.controls['Amount'].value <100){
      this.apiSer.showAlert('oops!','Deposit Amount should be ateast 100','warning');
      return ;
    }
    this.showsubmitbtn = true;
    this.paymentinput = false;
    let reqAmount = this.depositForm.controls['Amount'].value;
    localStorage.setItem("Amount",reqAmount);
    // this.apiSer.initHeaders.apply('Amount',reqAmount);
    this.apiSer.apiRequest(config['getPaymentGateway']).subscribe({
      next: data => {
        if (data) {
          this.paymentGateway = data
          this.showsubmitbtn = false;
        //   this.paymentGateway.forEach((element)=>{
        //   this.finalDepositPro1(element);
        // });
        }
      },
      error: err => {
        this.apiSer.showAlert('Something Went Wrong', 'Please check your Internet Connection', 'error');
        this.showsubmitbtn = false;
      }
    });
  }
  finalDepositPro(item:any){
    this.showsubmitbtn = true;
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
        this.paymenting = data;
        this.showsubmitbtn = false;
      },
      error: err => {
        this.showsubmitbtn = false;
        this.apiSer.showAlert('Something Went Wrong', 'Please check your internet connection', 'error');

      }
    });
  }
  finalDepositPro1(item:any){
    this.showsubmitbtn = true;
    let param = {"Amount":this.depositForm.controls['Amount'].value,"SiteName":item.SiteName}
      this.apiSer.apiRequest(config['depositReq1'], param).subscribe({
      next: data => {
        if (data.ErrorCode == '1') {
          let trans = data.Result.split("=");
          this.transcationId = trans[1];
          console.log(item.PaymentUrl+""+this.transcationId);
          // this.paymentinput = false;
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

  setAmount(amount: any) {
    this.depositForm.controls['Amount'].setValue(amount);
  }
  backPage(){
    this.paymentGateway = [];
    this.paymentinput = true;
  }
  ngOnDestroy(): void {
    localStorage.removeItem('Amount');
  }
  
}
