import { Component, Inject, OnInit, Output ,EventEmitter, ViewChild, TemplateRef} from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ApiService } from '../../service/api.service';
import { CommonServiceService } from '../../service/common-service.service';
import { Subscription ,catchError} from 'rxjs';
import { config } from '../../service/config';
import { Router } from '@angular/router';
import { ComFunService } from '../../service/com-fun.service';

@Component({
  selector: 'app-loginpopup',
  templateUrl: './loginpopup.component.html',
  styleUrl: './loginpopup.component.css'
})
export class LoginpopupComponent implements OnInit{
  @ViewChild('forgotPass') forgotPass !: TemplateRef<any>;
  @ViewChild('register') register !: TemplateRef<any>;
  @Output() onCancel = new EventEmitter<any>();
  @Output() loginCheck = new EventEmitter<any>();
  defRef:any;
  defRegister:any;
  showPass:boolean=false;
  constructor(private fb:FormBuilder,private apiSer:ApiService,private comSer:CommonServiceService,private router:Router,private dialog:MatDialog){}
  mobileLogin !:FormGroup;
  show = 'fa fa-eye';
  Mobile: string = "";
  UserPassword: string = "";
  password = "password";
  showsubmitbtn :boolean = false
  btnLoading :boolean = false
  private loaderSubscriber !: Subscription;
  private apiSubscriber: Subscription[]=[];


  private logcheck !: Subscription;
  checkLogin: boolean = false;
  showmenu: boolean = false;
  username: any = '';
  userBalance!: number;
  ngOnInit(): void {
    this.loaderSubscriber = this.apiSer.loaderService.loading$.pipe(
      catchError((error)=>{
      throw error
    })
    ).subscribe((loading:any={}) => {
      this.btnLoading=('login' in loading)?true:false;
    });
    this.mobileLogin = this.fb.group({
      Mobile : ['',[Validators.required]],
      Password : ['',Validators.required],
    });
    this.mobileLogin.controls['Mobile'].valueChanges.subscribe(value=>{
      let strMo = String(value).trim();
      let digitsOnly = strMo.replace(/\D/g, '');
      if (digitsOnly && digitsOnly.length >= 10) {
        let trimmedValue = digitsOnly.substring(0, 10);
        this.mobileLogin.controls['Mobile'].setValue(trimmedValue, { emitEvent: false });
    }
    });
  }
  
  validateNumber(event: KeyboardEvent) {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete'];
    const isCopy = event.ctrlKey && event.key === 'c';
    const isPaste = event.ctrlKey && event.key === 'v';
    const isCmdCopy = event.metaKey && event.key === 'c'; 
    const isCmdPaste = event.metaKey && event.key === 'v'; 
    const isCmdselect = event.metaKey && event.key === 'a'; 
    const isSelect = event.ctrlKey && event.key === 'a'; 
  
    if (!allowedKeys.includes(event.key) && !isCopy && !isPaste && !isCmdCopy && !isCmdPaste && !isCmdselect && !isSelect) {
      event.preventDefault();
    }
  }
  onBack(){
    this.onCancel.emit();
  }
  showPassword(){
    this.showPass = !this.showPass;
  }
  onLogin(){
    if(!this.mobileLogin.controls['Mobile'].value){
      this.apiSer.showAlert('','Mobile no. should not be blank','warning');
      return
    }
    if(!this.mobileLogin.controls['Password'].value){
      this.apiSer.showAlert('','Password should not be blank','warning');
      return
    }
    this.showsubmitbtn = true;
    let param = this.mobileLogin.getRawValue();
    this.apiSer.apiRequest(config['login'],param).subscribe({
      
      next: data=>{
        
        if(data.ErrorCode == '1'){
          this.showsubmitbtn = false;
          this.comSer.saveData('UserId',data.UserId);
          this.comSer.saveData('LoginToken',data.LoginToken);
          this.comSer.saveData('name',data.UserName);
          this.apiSer.showAlert(data.ErrorMessage,'','success');
         this.onBack();
         this.loginCheck.emit();
          this.router.navigate(['/']);
        }else if(data.ErrorCode != '1'){
          this.apiSer.showAlert('Login Failed','','error');
          
        }
      },
      error: err => {
        this.apiSer.showAlert('Something Went Wrong','','error');
      }
    });
 
  }
  // loginchecks() {
  //   this.logcheck = this.comSer.loging$.subscribe((loging: any = {}) => {
  //     this.checkLogin = ('login' in loging) ? true : false;
  //     if (!this.checkLogin || !localStorage.getItem('UserName')) {
  //       return;
  //     }
  //     this.checkLogin = true;
  //     this.username = localStorage.getItem('UserName');
  //     this.apiSer.apiRequest(config['balance']).subscribe({
  //       next: data => {
  //         if (data.ErrorCode == '0') {
  //           this.apiSer.showAlert('', data.ErrorMessage, 'error');
  //           this.comSer.clearLocalVars();
  //         } else {
  //           this.userBalance = data.Balance;
  //           // this.refreshHeader();
  //         }
  //       },
  //       error: err => {
  //         this.apiSer.showAlert('Something Went Wrong', 'Check Your Internet Connection', 'error');
  //         console.error(err);
  //       }
  //     });
  //   });
  // }
  logout() {
    this.apiSer.logout();
  }

  OpenForgot(){
      this.defRef = this.dialog.open(this.forgotPass);
      this.defRef.afterClosed().subscribe(() => { });
  }
  closePopup(){
    this.defRef.close();
    
    }
    openRegister(){
      this.defRegister = this.dialog.open(this.register);
      this.defRegister.afterClosed().subscribe(() => { });
    }
    closeCancel(){
      this.defRegister.close();
    }
   
}
