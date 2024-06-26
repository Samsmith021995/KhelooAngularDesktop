import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { config } from '../../service/config';
import { ApiService } from '../../service/api.service';
import { CommonServiceService } from '../../service/common-service.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { NzDrawerPlacement } from 'ng-zorro-antd/drawer';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ComFunService } from '../../service/com-fun.service';


@Component({
  selector: 'app-desktop-header',
  templateUrl: './desktop-header.component.html',
  styleUrl: './desktop-header.component.css',
  changeDetection: ChangeDetectionStrategy.Default
})
export class DesktopHeaderComponent implements OnInit,OnDestroy {
  @ViewChild('loginPop') loginPop!: TemplateRef<any>;
  @ViewChild('profilePop') profilePop!: TemplateRef<any>;
  dialogRef:any;
  showmenu: boolean = false;
  showsubmitbtn: boolean = false;
  selectTab:number = 0;
  username: any = '';
  loginForm !: FormGroup;
  checkLogin: boolean = false;
  profileRef:string = '';
  private logcheck !: Subscription;
  userBalance: number = 0;
  constructor(private fb: FormBuilder, private apiSer: ApiService, private comSer: CommonServiceService, private router: Router,private dialog:MatDialog,private msg:NzMessageService,private comFun:ComFunService) { }
  cdn: string = this.comFun.cdn;
  ngOnInit(): void {
    this.loginchecks();
    this.loginForm = this.fb.group({
      Mobile: ['', [Validators.required, Validators.maxLength(10)]],
      Password: ['', Validators.required],
    });
    this.username = localStorage.getItem('name');
    this.showmenu = false;
    this.loginForm.controls['Mobile'].valueChanges.subscribe(value=>{
      let strMo = String(value).trim();
      let digitsOnly = strMo.replace(/\D/g, '');
      if (digitsOnly && digitsOnly.length >= 10) {
        let trimmedValue = digitsOnly.substring(0, 10);
        this.loginForm.controls['Mobile'].setValue(trimmedValue, { emitEvent: false });
    }
    });
    this.apiSer.isLoggedIn$.subscribe({
      next: data => {
        console.log(this.checkLogin)
        this.checkLogin = data;
        if(data == true){
          this.username = localStorage.getItem('name');
          this.checkBalance();

        }
    },
    error:err=>{

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
  showmenubar() {
    this.showmenu = !this.showmenu;
  }

   login() {
    if(!this.loginForm.controls['Mobile'].value){
      this.apiSer.showAlert('','Provide Mobile number','warning');
      return;
    }
    if(!this.loginForm.controls['Password'].value){
      this.apiSer.showAlert('','Provide Password','warning');
      return;
    }
    this.showsubmitbtn = true;
    let param = this.loginForm.getRawValue();
    this.apiSer.apiRequest(config['login'], param).subscribe({
      next: data => {
        if (data.ErrorCode == '1') {
          this.showsubmitbtn = false;
          this.comSer.saveData('UserId', data.UserId);
          this.comSer.saveData('LoginToken', data.LoginToken);
          this.comSer.saveData('name', data.UserName);
          this.apiSer.showAlert(data.ErrorMessage, '', 'success');
          this.refreshHeader();
          this.loginchecks();
          this.router.navigate(['/']);
        } else if (data.ErrorCode != '1') {
          this.apiSer.showAlert(data.ErrorMessage, '', 'error');
        }
      },
      error: err => {
        this.apiSer.showAlert('Something Went Wrong', '', 'error');
      }
    });
  }
  loginchecks() {
    this.logcheck = this.comSer.loging$.subscribe((loging: any = {}) => {
      this.checkLogin = ('login' in loging) ? true : false;
      if (!this.checkLogin || !localStorage.getItem('name')) {
        return;
      }
      this.checkLogin = true;
      this.username = localStorage.getItem('name');
      // console.log(this.username);
      if(!this.username){
        this.checkLogin = false;
        return;
      }
      this.apiSer.apiRequest(config['balance']).subscribe({
        next: data => {
          if (data.ErrorCode == '0') {
            this.msg.error(data.ErrorMessage, {nzDuration:3000,nzPauseOnHover:true});
            this.apiSer.logout();
            this.comSer.clearLocalVars();
          } else {
            this.userBalance = data.Balance;
          }
        },
        error: err => {
          this.apiSer.showAlert('Something Went Wrong', 'Check Your Internet Connection', 'error');
          console.error(err);
        }
      });
    });
  }
  logout() {
    this.apiSer.logout();
  }
  refreshHeader() {
    this.showmenu = false;
    let LoginToken = localStorage.getItem('LoginToken');
    if (LoginToken != '' && LoginToken != null) {
      this.comSer?.startloging('login');
    } else {
      this.comSer?.stoploging('login');
    }
  }
  navigate(item:string){
    this.showmenu = false;
    this.router.navigate(['/'+item])
  }
  requestCallback(){
    Swal.fire({
      title: "Request a call back ?",
      icon: "warning",
      iconColor: 'rgb(64 195 237)',
      showCancelButton: true,
      cancelButtonText: 'No',
      confirmButtonColor: "##fc0",
      cancelButtonColor: "rgb(170, 170, 170)",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        this.apiSer.apiRequest(config['callback']).subscribe({
          next: (data) => {
            if (data.ErrorCode == '1') {
              Swal.fire({
                title: "success",
                text: data.ErrorMessage,
                icon: "success"
              });
            } else {
              Swal.fire({
                title: "Oops!",
                text: data.ErrorMessage,
                icon: "error",
                confirmButtonColor: "##fc0",
              });
            }
          },
          error: (err) => {
            console.error(err)
          }
        })
      }
    });
  }

  // new Code for Pop
  LoginPopUp(item:number){
    this.selectTab = item;
    this.dialogRef = this.dialog.open(this.loginPop,{
      width:'1200px'
    })
    this.dialogRef.afterClosed().subscribe(() => { });
  }
  openprofilePop(item:any){
    this.profileRef = item;
    let dialogRef1= this.dialog.open(this.profilePop,{
      width:'1200px'
    })
    dialogRef1.afterClosed().subscribe(() => { });
  }
  checkBalance(){
    this.apiSer.apiRequest(config['balance']).subscribe({
      next: data => {
        if (data.ErrorCode == '0') {
          this.msg.error(data.ErrorMessage, {nzDuration:3000,nzPauseOnHover:true});
          this.comSer.clearLocalVars();
          this.apiSer.logout();
        } else {
          this.userBalance = data.Balance;
          // this.refreshHeader();
        }
      },
      error: err => {
        this.msg.error('Something Went Wrong', {nzDuration:3000,nzPauseOnHover:true});
        console.error(err);
      }
    });
  }
  logoutUser()
  {
    this.apiSer.logout();
  }
  ngOnDestroy(): void {
    this.showmenu = false;
  }

  search(){
    this.comFun.toggleDrawer();
  }

}
