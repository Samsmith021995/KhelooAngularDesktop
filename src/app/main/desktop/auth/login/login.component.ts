
import { Component ,ChangeDetectorRef, OnInit} from "@angular/core";
import { FormBuilder,FormGroup, Validators } from "@angular/forms";

// import { StrogeService } from 'src/app/service/stroge.service';
import { Router } from "@angular/router";
// import { UserAuthService } from "src/app/service/user-auth.service";
import { ApiService } from "src/app/main/service/api.service";
import { CommonServiceService } from "src/app/main/service/common-service.service";
import { config } from "src/app/main/service/config";
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

 loginform  !:FormGroup;
 constructor(private fb:FormBuilder,private apiSer:ApiService,private router:Router,private cdr: ChangeDetectorRef,private comSer:CommonServiceService){
   
  }
ngOnInit(): void {
  
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
  console.log("Ashutosh");
   this.showsubmitbtn = true;
   let param = this.loginform.getRawValue();
   console.log(param);
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
