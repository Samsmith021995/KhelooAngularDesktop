import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subscription, catchError } from 'rxjs';
import { ApiService } from 'src/app/main/service/api.service';
import { config } from 'src/app/main/service/config';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.css'
})
export class ProfileDetailsComponent implements OnInit{
  resetForm!:FormGroup;
  isLoading:boolean = false;

  private loaderSubscriber !: Subscription;
  constructor(private fb:FormBuilder,private apiService:ApiService,private msg:NzMessageService){}
  ngOnInit(): void {
    this.resetForm = this.fb.group({
      Password: ["", [Validators.required]],
      NewPassword: ["", [Validators.required,Validators.minLength(6)]],
      ConfirmPassword: ["", [Validators.required,this.confirmationValidator]],
    });
    this.loaderSubscriber = this.apiService.loaderService.loading$.subscribe((loading: any = {}) => {
      this.isLoading = ('changePassword' in loading) ? true : false;
    });
  }
  formSubmit(){
    let param = this.resetForm.getRawValue();
    this.apiService.apiRequest(config['changePassword'], param).pipe(
      catchError((error) => {
        this.msg.error('Something Went Wrong', {nzDuration:3000,nzPauseOnHover:true});
        console.error('An error occurred:', error);
        throw error
      })
    ).subscribe(
      data => {
        if (data.ErrorCode === "1") {
          this.msg.success(data.ErrorMessage, {nzDuration:3000,nzPauseOnHover:true});
          this.resetForm.reset();
        } else {

          this.msg.error(data.ErrorMessage, {nzDuration:3000,nzPauseOnHover:true});
        }
      });
  }
  updateConfirmValidator(): void {
    Promise.resolve().then(() => this.resetForm.controls['ConfirmPassword'].updateValueAndValidity());
  }
  confirmationValidator: ValidatorFn = (control:AbstractControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.resetForm.controls['NewPassword'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };
}
