import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { config } from '../../service/config';
import { ApiService } from '../../service/api.service';
import { CommonServiceService } from '../../service/common-service.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-desktop-header',
  templateUrl: './desktop-header.component.html',
  styleUrl: './desktop-header.component.css',
  changeDetection: ChangeDetectionStrategy.Default
})
export class DesktopHeaderComponent implements OnInit,OnDestroy {
  showmenu: boolean = false;
  showsubmitbtn: boolean = false;
  username: any = '';
  loginForm !: FormGroup;
  checkLogin: boolean = false;
  private logcheck !: Subscription;
  userBalance: number = 0;
  constructor(private fb: FormBuilder, private apiSer: ApiService, private comSer: CommonServiceService, private router: Router) { }

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
  }
  validateNumber(event: KeyboardEvent) {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete'];
    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }
  showmenubar() {
    this.showmenu = !this.showmenu;
  }

   login() {
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
            this.apiSer.showAlert('', data.ErrorMessage, 'error');
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
  ngOnDestroy(): void {
    this.showmenu = false;
  }

}
