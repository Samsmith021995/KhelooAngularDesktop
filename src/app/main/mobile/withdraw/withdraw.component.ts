import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { config } from '../../service/config';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.css'
})
export class WithdrawComponent implements OnInit{
  private loaderSubscriber !: Subscription;
  private apiSubscriber: Subscription[] = [];
  withdrawForm!:FormGroup;
  showsubmitbtn :boolean = false;
  isLoading :boolean = false;
  isStatusLoading :boolean = false;
  withdrawStatement:any;
  withdrawState :boolean =false;
  constructor(private fb:FormBuilder,private apiSer:ApiService){}
  ngOnInit(): void {
    this.loaderSubscriber = this.apiSer.loaderService.loading$.subscribe((loading: any = {}) => {
      this.isLoading = ('withdrawReq' in loading) ? true : false;
      this.isStatusLoading = ('withdrawState' in loading) ? true : false;
    });
    this.withdrawForm = this.fb.group({
      AccountHolderName: ['',Validators.required],
      AccountNumber: ['',Validators.required],
      BankName: ['',Validators.required],
      BranchName: ['',Validators.required],
      Amount: ['',Validators.required],
      IfscCode: ['',Validators.required],
    });
  }

  SubmitWithdrawRequest(){
    this.showsubmitbtn = true;
    // this.api.loaderShow();
    this.apiSer.apiRequest(config['withdrawReq'], this.withdrawForm.getRawValue()).subscribe({
      next: data=>{
        if(data.ErrorCode == '1'){
          this.apiSer.showAlert(data.Result,data.ErrorMessage,'success');    
        }else{
          this.apiSer.showAlert('',data.ErrorMessage,'error');    
        }
        this.showsubmitbtn = false;
        // this.api.loaderHide();
      },
      error : err=>{
        this.apiSer.showAlert('Something Went Wrong','Please check your internet Connection','error');    
        this.showsubmitbtn = false;
        // this.api.loaderHide();
        
      }
    });
  }

  withdrawStatus(){
    // this.api.loaderShow();
    this.apiSer.apiRequest(config['withdrawState']).subscribe({
      next:data=>{
        this.withdrawStatement = data;
        this.withdrawState = true;
        // this.api.loaderHide();
      },
      error:err=>{
        this.apiSer.showAlert('Something Went Wrong','Please check your internet Connection','error');
        // this.api.loaderHide();
      }
    })
  }
  bankStatus(){
    this.withdrawState = false;
  }

}
