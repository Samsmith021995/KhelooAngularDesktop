import { Component ,ChangeDetectorRef, OnInit, ViewChild, TemplateRef} from "@angular/core";
import { FormBuilder,FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "src/app/main/service/api.service";
import { CommonServiceService } from "src/app/main/service/common-service.service";
import { config } from "src/app/main/service/config";
import { Subscription ,catchError} from "rxjs";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  @ViewChild('forgotPass') forgotPass !: TemplateRef<any>;
  defClose:any;
  isSmallScreen!:boolean;
 show = 'fa fa-eye';
 Mobile: string = "";
 UserPassword: string = "";
 password = "password";
 private loaderSubscriber !: Subscription;
 private apiSubscriber: Subscription[]=[];
 loginform  !:FormGroup
 btnLoading:boolean = false;

 constructor(private fb:FormBuilder,private apiSer:ApiService,private router:Router,private cdr: ChangeDetectorRef,private comSer:CommonServiceService,private dialog:MatDialog){
   
  }
ngOnInit(): void {
  this.comSer.myVariable$.subscribe((width)=>{
    this.isSmallScreen = width === "true";
  });
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
  this.loginform.controls['Mobile'].valueChanges.subscribe(value=>{
    let strMo = String(value).trim();
    let digitsOnly = strMo.replace(/\D/g, '');
    if (digitsOnly && digitsOnly.length >= 10) {
      let trimmedValue = digitsOnly.substring(0, 10);
      this.loginform.controls['Mobile'].setValue(trimmedValue, { emitEvent: false });
  }
  });
}

validateNumber(event: KeyboardEvent) {
  const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete'];
  if (!allowedKeys.includes(event.key)) {
    event.preventDefault();
  }
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
    let param = this.loginform.getRawValue();
   this.apiSer.apiRequest(config['login'],param).subscribe({
     next: data=>{
       if(data.ErrorCode == '1'){
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
       this.btnLoading = false;
     }
   });
 }
 forgotPassword(){
  this.defClose = this.dialog.open(this.forgotPass);
  this.defClose.afterClosed().subscribe({});
 }
 closePopup(){
  this.defClose.close();
 }
}
