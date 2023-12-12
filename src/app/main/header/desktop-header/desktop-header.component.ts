import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { config } from '../../service/config';
import { ApiService } from '../../service/api.service';
import { CommonServiceService } from '../../service/common-service.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-desktop-header',
  templateUrl: './desktop-header.component.html',
  styleUrl: './desktop-header.component.css',
  changeDetection: ChangeDetectionStrategy.Default
})
export class DesktopHeaderComponent implements OnInit {
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
    this.username = localStorage.getItem('UserName');
  }
  showmenubar() {
    console.log("Ashutosh");
    this.showmenu = !this.showmenu;
  }

  login() {
    this.showsubmitbtn = true;
    let param = this.loginForm.value;
    this.apiSer.apiRequest(config['login'], param).subscribe({
      next: data => {
        if (data.ErrorCode == '1') {
          this.showsubmitbtn = false;
          this.comSer.saveData('UserId', data.UserId);
          this.comSer.saveData('LoginToken', data.LoginToken);
          this.comSer.saveData('UserName', data.UserName);
          this.apiSer.showAlert(data.ErrorMessage, '', 'success');
          this.refreshHeader();
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
    console.log("Login Checkiing .....");
    this.logcheck = this.comSer.loging$.subscribe((loging: any = {}) => {
      this.checkLogin = ('login' in loging) ? true : false;
      console.log(this.checkLogin);
      if (!this.checkLogin || !localStorage.getItem('UserName')) {
        return;
      }
      this.checkLogin = true;
      this.username = localStorage.getItem('UserName');
      this.apiSer.apiRequest(config['balance']).subscribe({
        next: data => {
          if (data.ErrorCode == '0') {
            this.apiSer.showAlert('', data.ErrorMessage, 'error');
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
    let LoginToken = localStorage.getItem('LoginToken');
    if (LoginToken != '' && LoginToken != null) {
      this.comSer?.startloging('login');
    } else {
      this.comSer?.stoploging('login');
    }
  }
}
