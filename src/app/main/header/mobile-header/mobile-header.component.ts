import { Component, Inject, ViewChild, ElementRef, TemplateRef, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonServiceService } from '../../service/common-service.service';
import { Subscription } from 'rxjs';
import { ApiService } from '../../service/api.service';
import { config } from '../../service/config';
import { Router } from '@angular/router';
import { UrlService } from '../../service/url.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  // styleUrl: './mobile-header.component.css',
  styleUrls: ['./mobile-header.component.css']
})
export class MobileHeaderComponent implements OnInit,OnDestroy {
  @ViewChild('login') login!: TemplateRef<any>;
  slidesPerViewn:number = 4;
  dialogRef:any;
  constructor(public dialog: MatDialog, private comSer: CommonServiceService, private apiSer: ApiService,private router:Router, private urlSer:UrlService) { }
  private logcheck !: Subscription;
  checkLogin: boolean = false;
  showmenu: boolean = false;
  private showSubscription!: Subscription;
  username: any = '';
  userBalance!: number;
  isUrlPresent!:boolean;
  private urlSubscription!: Subscription;
  ngOnInit(): void {
    this.showSubscription = this.apiSer.getShowMenu().subscribe(value=>{
      this.showmenu= value;
    });
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
    Swal.fire({
      title: "Are you sure to logout?",
      icon: "warning",
      iconColor: '#f4ad09',
      showCancelButton: true,
      cancelButtonText: 'No',
      confirmButtonColor: "#f4ad09",
      cancelButtonColor: "rgb(170, 170, 170)",
      confirmButtonText: "Yes!",
      reverseButtons: true,
      showClass:
      {
        popup: 'swal2-show Ashutosh Ashu',
        backdrop: 'swal2-backdrop-show',
        icon: 'swal2-icon-show'
      },
      customClass: {
        confirmButton: 'custom-btn-cancel',
        cancelButton: 'custom-btn-cancel'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.apiSer.logout(); 
      }
      this.showmenu =false;
    });
  }
  navigate(item:any){
    this.router.navigate([item]);
    this.showmenu =false;
    this.apiSer.setShowMenu(this.showmenu);
  }
  showmenubar() {
    this.showmenu = !this.showmenu;
    this.apiSer.setShowMenu(this.showmenu);
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
    this.apiSer.setShowMenu(false);
    this.apiSer.updatePromotion(true);
  }
  ngOnDestroy(): void {
    this.showSubscription.unsubscribe();
  }

}
