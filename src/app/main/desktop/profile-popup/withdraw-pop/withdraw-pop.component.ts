import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subscription, catchError } from 'rxjs';
import { ApiService } from 'src/app/main/service/api.service';
import { ComFunService } from 'src/app/main/service/com-fun.service';
import { config } from 'src/app/main/service/config';

@Component({
  selector: 'app-withdraw-pop',
  templateUrl: './withdraw-pop.component.html',
  styleUrl: './withdraw-pop.component.css'
})
export class WithdrawPopComponent  implements OnInit{

  @ViewChildren('bankDetailShow') bankshow!: QueryList<ElementRef<any>>;
  formLoading:boolean = false
  isLoading:boolean = false;
  btnLoading:boolean = false;
  withdrawForm:boolean = true;
  viewDetails:boolean = false;
  bankForm !:FormGroup;
  withdrawStatement: any;
  private loaderSubscriber !: Subscription;
  constructor(private fb:FormBuilder,private apiSer:ApiService,private msg:NzMessageService,private renderer: Renderer2,private comFun:ComFunService){}
  cdn: string = this.comFun.cdn;
  ngOnInit(): void {

  this.withdrawForm = true;
    this.loaderSubscriber = this.apiSer.loaderService.loading$.subscribe((loading: any = {}) => {
      this.isLoading = ('withdrawReq' in loading) ? true : false;
      this.btnLoading = ('cancelReq' in loading) ? true : false;
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
          this.withdrawStatus();
        } else {
          this.msg.error(data.ErrorMessage,{nzDuration:3000});
        }
      },
      error: err => {
        this.msg.error('Something Went Wrong',{nzDuration:3000});
      }
    });
  }
  withdrawStatus() {
    this.apiSer.apiRequest(config['withdrawState']).subscribe({
      next: data => {
        this.withdrawStatement = data;
      },
      error: err => {
        this.msg.error('Something Went Wrong',{nzDuration:3000});
      }
    })
  }
  reverseWithdraw(item:any) {
    let param = item;
    this.apiSer.apiRequest(config['cancelReq'],param).pipe(catchError((error)=>{
      throw error
    })).subscribe((data)=>{
      if(data.ErrorCode == '1'){
        this.msg.success(data.ErrorMessage,{nzDuration:3000});
        this.withdrawStatus();
      }else{
        this.msg.error(data.ErrorMessage,{nzDuration:3000});

      }
    });
  }
  viewWithdraw(){
    this.withdrawForm = !this.withdrawForm;
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
