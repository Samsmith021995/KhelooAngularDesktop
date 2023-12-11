import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/main/service/api.service';
import { config } from 'src/app/main/service/config';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {
  private loaderSubscriber !: Subscription;
  private apiSubscriber: Subscription[]=[];
  btnLoading = false;
  forgotform !:FormGroup;
  
 typepass:string= 'password';
 typepass1:string= 'password';
 
  constructor(private fb:FormBuilder,private apiService:ApiService,private router:Router) { }
  ngOnInit() {
    this.loaderSubscriber = this.apiService.loaderService.loading$.subscribe((loading:any={}) => {
      this.btnLoading=('changePassword' in loading )?true:false;
      this.forgotform = this.fb.group({
        Password:["",[Validators.required]],
        NewPassword:["",[Validators.required]],
        ConfrimPassword:["",[Validators.required]],
      });
    });
  }

  onSubmit(){
    let param = this.forgotform.getRawValue();
    let pass = this.forgotform.controls['Password'].value;
    let pass1 = this.forgotform.controls['NewPassword'].value;
    let pass2 = this.forgotform.controls['ConfrimPassword'].value;
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
    if(!pass1 != pass2){
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
            this.router.navigate(['/']);
          }else{
            this.apiService.showAlert('',data.ErrorMessage,'error');
          }
        });
      
  }
  
  showPass(type:any){
    this.typepass = type === 'password'?'text':'password';
  }

  ngOnDestroy(): void {
    if (this.loaderSubscriber) {
      this.loaderSubscriber.unsubscribe();
    }
    if(this.apiSubscriber[0]) {
      this.apiSubscriber[0].unsubscribe();
    }
  }
}
