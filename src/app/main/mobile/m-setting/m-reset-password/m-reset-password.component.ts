import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { ApiService } from 'src/app/main/service/api.service';
import { config } from 'src/app/main/service/config';
import { catchError,Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-m-reset-password',
  templateUrl: './m-reset-password.component.html',
  styleUrl: './m-reset-password.component.css'
})
export class MResetPasswordComponent implements OnInit {
  @Output() onCancel = new EventEmitter<any>();
  private loaderSubscriber !: Subscription;
  resetForm !:FormGroup;
  btnLoading:boolean = false;
  constructor( private fb:FormBuilder,private apiService:ApiService,private router:Router){}
  ngOnInit(): void {
    this.resetForm = this.fb.group({
      Password:["",[Validators.required]],
      NewPassword:["",[Validators.required]],
      ConfrimPassword:["",[Validators.required]],
    });
    this.loaderSubscriber = this.apiService.loaderService.loading$.subscribe((loading:any={}) => {
      this.btnLoading=('changePassword' in loading )?true:false;
    });
  }
  ChangePassword(){
let param = this.resetForm.getRawValue();
    let pass = this.resetForm.controls['Password'].value;
    let pass1 = this.resetForm.controls['NewPassword'].value;
    let pass2 = this.resetForm.controls['ConfrimPassword'].value;
    if(!pass.trim()){
      this.apiService.showAlert('','Password Should not be Blank','warning')
      return;
    }
    if(!pass1.trim()){
      this.apiService.showAlert('','New Password Should not be Blank','warning')
      return;
    }
    if(!pass2.trim()){
      this.apiService.showAlert('','Confirm Password Should not be Blank','warning')
      return;
    }
    if(pass1 != pass2){
      this.apiService.showAlert('','New password and confirm Password should be match','warning')
      return;
    }
      this.apiService.apiRequest(config['changePassword'],param).pipe(
        catchError((error)=>{
          this.apiService.showAlert('Something Went Wrong','Check your Internet Connection','error');
          this.btnLoading=false; 
          console.error('An error occurred:', error);
          throw error
        })
      ).subscribe(
        data =>{
          if(data.ErrorCode == '1'){
            this.apiService.showAlert('',data.ErrorMessage,'success');
            this.onCancel.emit();
            this.router.navigate(['/']);
          }else{
            this.apiService.showAlert('',data.ErrorMessage,'error');
          }
        });
      
  }
  onClose(){
    this.onCancel.emit();
  }
}
