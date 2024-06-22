import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subscription, catchError } from 'rxjs';
import { ApiService } from 'src/app/main/service/api.service';
import { config } from 'src/app/main/service/config';

@Component({
  selector: 'app-withdraw-pop',
  templateUrl: './withdraw-pop.component.html',
  styleUrl: './withdraw-pop.component.css'
})
export class WithdrawPopComponent  implements OnInit{
  formLoading:boolean = false
  isLoading:boolean = false;
  withdrawForm:boolean = true;
  // isSpinning:boolean = 
  bankForm !:FormGroup;
  withdrawStatement: any;
  private loaderSubscriber !: Subscription;
  constructor(private fb:FormBuilder,private apiSer:ApiService,private msg:NzMessageService){}
  ngOnInit(): void {

  this.withdrawForm = true;
    this.loaderSubscriber = this.apiSer.loaderService.loading$.subscribe((loading: any = {}) => {
      this.isLoading = ('withdrawReq' in loading) ? true : false;
      // this.isStatusLoading = ('withdrawState' in loading) ? true : false;
    });
    this.bankForm = this.fb.group({
      AccountHolderName:["",Validators.required],
      AccountNumber:["",Validators.required],
      BankName:["",Validators.required],
      BranchName:["",Validators.required],
      Amount:["",Validators.required],
      IfscCode:["",Validators.required],
    });
    this.withdrawStatus();
  }
  formSubmit(){
    this.apiSer.apiRequest(config['withdrawReq'], this.bankForm.getRawValue()).subscribe({
      next: data => {
        if (data.ErrorCode == '1') {
          this.msg.success(data.ErrorMessage,{nzDuration:3000});
          this.bankForm.reset();
        } else {
          this.msg.error(data.ErrorMessage,{nzDuration:3000});
        }
        // this.showsubmitbtn = false;
      },
      error: err => {
        this.msg.error('Something Went Wrong',{nzDuration:3000});
        // this.showsubmitbtn = false;
      }
    });
  }
  withdrawStatus() {
    // this.api.loaderShow();
    // this.withdrawState = true;
    this.apiSer.apiRequest(config['withdrawState']).subscribe({
      next: data => {
        this.withdrawStatement = data;
        console.log(this.withdrawStatement);
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
  viewWithdraw(){
    this.withdrawForm = !this.withdrawForm;
  }
}
