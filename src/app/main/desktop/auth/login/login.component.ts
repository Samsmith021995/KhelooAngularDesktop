import { Component ,ChangeDetectorRef, OnInit} from "@angular/core";
import { FormBuilder,FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "src/app/main/service/api.service";
import { CommonServiceService } from "src/app/main/service/common-service.service";
import { config } from "src/app/main/service/config";
import { Subscription ,catchError} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
 //password: any;
 show = 'fa fa-eye';
 Mobile: string = "";
 UserPassword: string = "";
 password = "password";
 showsubmitbtn :boolean = false
 private loaderSubscriber !: Subscription;
 private apiSubscriber: Subscription[]=[];
 loginform  !:FormGroup
 btnLoading:boolean = false;

 constructor(private fb:FormBuilder,private apiSer:ApiService,private router:Router,private cdr: ChangeDetectorRef,private comSer:CommonServiceService){
   
  }
ngOnInit(): void {
  this.loaderSubscriber = this.apiSer.loaderService.loading$.pipe(
    catchError((error)=>{
    throw error
  })
  ).subscribe((loading:any={}) => {
    this.btnLoading=('login' in loading)?true:false;
  });
  this.loginform = this.fb.group({
    Mobile : ['',[Validators.required]],
    Password : ['',Validators.required],
  });
}


 showpassword() {
   if (this.password === "password") {
     this.password = "text";
     this.show = 'fa fa-eye-slash';
   } else {
     this.password = "password";
     this.show = 'fa fa-eye';
   }
 }

 login(){
    this.showsubmitbtn = true;
    let param = this.loginform.getRawValue();
   this.apiSer.apiRequest(config['login'],param).subscribe({
     next: data=>{
       if(data.ErrorCode == '1'){
         this.showsubmitbtn = false;
         this.comSer.saveData('UserId',data.UserId);
         this.comSer.saveData('LoginToken',data.LoginToken);
         this.comSer.saveData('name',data.UserName);
         this.apiSer.showAlert(data.ErrorMessage,'','success');
        //  this.apiSer.setUserDetails(data)
         this.router.navigate(['/']);
       }else if(data.ErrorCode != '1'){
         this.apiSer.showAlert(data.ErrorMessage,'','error');
         
       }
     },
     error: err => {
       this.apiSer.showAlert('Something Went Wrong','','error');
     }
   });
 }
}
