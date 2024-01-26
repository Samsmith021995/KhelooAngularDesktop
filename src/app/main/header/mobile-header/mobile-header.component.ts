import { Component, Inject, ViewChild, ElementRef, TemplateRef, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonServiceService } from '../../service/common-service.service';
import { Subscription } from 'rxjs';
import { ApiService } from '../../service/api.service';
import { config } from '../../service/config';
import { Router } from '@angular/router';
import { UrlService } from '../../service/url.service';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  // styleUrl: './mobile-header.component.css',
  styleUrls: ['./mobile-header.component.css']
})
export class MobileHeaderComponent implements OnInit {
  @ViewChild('login') login!: TemplateRef<any>;
  slidesPerViewn:number = 4;
  dialogRef:any;
  constructor(public dialog: MatDialog, private comSer: CommonServiceService, private apiSer: ApiService,private router:Router, private urlSer:UrlService) { }
  private logcheck !: Subscription;
  checkLogin: boolean = false;
  showmenu: boolean = false;
  username: any = '';
  userBalance!: number;
  isUrlPresent!:boolean;
  private urlSubscription!: Subscription;
  ngOnInit(): void {
    this.loginchecks();
    this.urlSubscription = this.urlSer
    .getIsUrlPresent().
    subscribe((isUrlPresent1) => {
      this.isUrlPresent = isUrlPresent1 === 'true';
    });
  }
  openDialog() {
     this.dialogRef = this.dialog.open(this.login)
    this.dialogRef.afterClosed().subscribe(() => { })

  }
  closePopup() {
    this.dialogRef.close();
  }
  loginchecks() {
    this.logcheck = this.comSer.loging$.subscribe((loging: any = {}) => {
      this.checkLogin = true;
      this.username = localStorage.getItem('name');
      if(!this.username){
        this.checkLogin = false;
        return;
      }
      if(this.checkLogin){
        this.apiSer.updateLoginStatus(this.checkLogin);
      }
      this.apiSer.apiRequest(config['balance']).subscribe({
        next: data => {
          if (data.ErrorCode == '0') {
            this.apiSer.showAlert('', data.ErrorMessage, 'error');
            this.comSer.clearLocalVars();
            this.apiSer.logout();
          } else {
            this.userBalance = data.Balance;
            // this.refreshHeader();
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
  navigate(item:any){
    this.router.navigate([item]);
    this.showmenu =false;
  }
  showmenubar() {
    this.showmenu = !this.showmenu;
  }

  refreshHeader() {
    let LoginToken = localStorage.getItem('LoginToken');
    if (LoginToken != '' && LoginToken != null) {
      this.comSer?.startloging('login');
    } else {
      this.comSer?.stoploging('login');
    }
  }
  promotins(){
    this.apiSer.updatePromotion(true);
  }

}
