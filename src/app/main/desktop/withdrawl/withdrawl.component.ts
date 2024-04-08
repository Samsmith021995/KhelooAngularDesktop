import { Component,OnInit,ViewChildren ,QueryList,ElementRef, Renderer2} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { config } from '../../service/config';
import { Subscription, catchError } from 'rxjs';

@Component({
  selector: 'app-withdrawl',
  templateUrl: './withdrawl.component.html',
  styleUrl: './withdrawl.component.css'
})
export class WithdrawlComponent {
  @ViewChildren('bankDeskDetailShow') bankshow!: QueryList<ElementRef<any>>;
  private loaderSubscriber !: Subscription;
  private apiSubscriber: Subscription[] = [];
  viewDeskDetails: boolean = false;
  withdrawStatement:any;
  isLoading :boolean = false;
  isStatusLoading :boolean = false;
  showsubmitbtn :boolean = false;
withdrawState :boolean =false;
  constructor(private fb:FormBuilder,private apiSer:ApiService,private renderer :Renderer2){
    
  }
  ngOnInit(): void {
    this.loaderSubscriber = this.apiSer.loaderService.loading$.subscribe((loading: any = {}) => {
      this.isLoading = ('withdrawReq' in loading) ? true : false;
      this.isStatusLoading = ('withdrawState' in loading) ? true : false;
    });
  }
  
  withdrawform = this.fb.group({
    AccountHolderName: ['',Validators.required],
    AccountNumber: ['',Validators.required],
    BankName: ['',Validators.required],
    BranchName: ['',Validators.required],
    Amount: ['',Validators.required],
    IfscCode: ['',Validators.required],
  });


  withdraw(){
    this.showsubmitbtn = true;
    // this.api.loaderShow();
    this.apiSer.apiRequest(config['withdrawReq'], this.withdrawform.getRawValue()).subscribe({
      next: data=>{
        if(data.ErrorCode == '1'){
          this.apiSer.showAlert(data.Result,data.ErrorMessage,'success');    
        }else{
          this.apiSer.showAlert('',data.ErrorMessage,'error');    
        }
        this.showsubmitbtn = false;
        // this.api.loaderHide();
        this.withdrawform.reset();
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

  viewDeskDetail(item: any) {
    let nativeElement = this.bankshow.toArray()[item].nativeElement;
    if (nativeElement) {
      if (nativeElement.classList.contains('viewDesk')) {
        this.renderer.removeClass(nativeElement, 'viewDesk');
        return;
      }
      this.renderer.addClass(nativeElement, 'viewDesk');
    }
  }
  cancelWithdraw(item:any){
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
}
