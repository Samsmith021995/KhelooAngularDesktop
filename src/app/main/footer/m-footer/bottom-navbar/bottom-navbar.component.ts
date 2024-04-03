import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/main/service/api.service';
import { CommonServiceService } from 'src/app/main/service/common-service.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { config } from 'src/app/main/service/config';
@Component({
  selector: 'app-bottom-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrl: './bottom-navbar.component.css'
})
export class BottomNavbarComponent implements OnInit, OnDestroy {
  @ViewChild('register') register!: TemplateRef<any>;
  @ViewChild('mainMenu') mainMenu!: TemplateRef<any>;
  @ViewChild('loginPop') loginPop!: TemplateRef<any>;
  isLoggedIn: boolean = false;
  diaRef1: any;
  diaRef2: any;
  diaRef3: any;
  showSp: boolean = false;
  private isLoggedInSubscription!: Subscription;
  selectedMenu: string = '';
  circular: boolean = false;
  constructor(private dialog: MatDialog, private comSer: CommonServiceService, public apiSer: ApiService, private router: Router) { }
  ngOnInit(): void {
     this.apiSer.setShowMenu(false);
    this.isLoggedInSubscription = this.apiSer.isLoggedIn$.subscribe((value) => {
      this.isLoggedIn = value;
    });

  }
  openRegister() {
    if(sessionStorage.getItem('redirectRegister')){
      this.router.navigate(['/'+sessionStorage.getItem('redirectRegister')]);
    } else{
      this.diaRef1 = this.dialog.open(this.register, {
        height: '900x',
        // width: '600px',
        panelClass: 'screen-dialog1',
      });
      this.diaRef1.afterClosed().subscribe(() => { });

    }
  }
  openMenu() {
    this.apiSer.setShowMenu(false);
    this.circular = false;
    this.showSp = false;
    this.diaRef2 = this.dialog.open(this.mainMenu, {
      height: '900x',
      // width: '600px',
      panelClass: 'screen-dialog',
    });
    this.diaRef2.afterClosed().subscribe(() => { });
  }

  updateData(search: any) {
    this.apiSer.setShowMenu(false);
    this.apiSer.updatePromotion(false);
    this.selectedMenu = search;
    this.comSer.sendSearchData(search);
    // this.router.navigate(['/']);
  }
  // seachData(item:any){
  //   this.comSer.sendSearchData(item);
  // }
  closeDial() {
    this.diaRef1.close();
  }
  closeDial1() {
    this.diaRef2.close();
  }
  ngOnDestroy() {
    // this.isLoggedInSubscription.unsubscribe();
  }

  showSupport() {
    this.circular = false;
    this.apiSer.setShowMenu(false);
    this.showSp = !this.showSp;
  }
  gameStart(param: any) {
    if(!this.isLoggedIn){
       this.diaRef3 = this.dialog.open(this.loginPop);
       this.diaRef3.afterClosed().subscribe(() => { });
      return
    }
    this.router.navigate(['/games', param]);
  }
  navigate(item: string) {
    this.apiSer.setShowMenu(false);
    this.router.navigate(['m-deposit', item]);
  }
  circularOpen() {
    this.showSp = false;
    this.apiSer.setShowMenu(false);
    this.circular = !this.circular;
  }
  closeDial2(){
    this.diaRef3.close();
  }
  requestCallback(){
    this.showSp = false;
    Swal.fire({
      title: "Request a call back ?",
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
        this.apiSer.apiRequest(config['callback']).subscribe({
          next: (data) => {
            if (data.ErrorCode == '1') {
              Swal.fire({
                title: "success",
                text: data.ErrorMessage,
                icon: "success",
                showClass:
                {
                  popup: 'swal2-show Ashutosh',
                  backdrop: 'swal2-backdrop-show',
                  icon: 'swal2-icon-show'
                },
                customClass: {
                  confirmButton: 'secondcofirm',
                }
              });
            } else {
              Swal.fire({
                title: "Oops!",
                text: data.ErrorMessage,
                icon: "error",
                confirmButtonColor: "#f4ad09",
                showClass:
                {
                  popup: 'swal2-show Ashutosh',
                  backdrop: 'swal2-backdrop-show',
                  icon: 'swal2-icon-show'
                },
                customClass: {
                  confirmButton: 'custom-btn-cancel',
                }
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
  callSupport(val:any){
    let param = {type:val}
    this.apiSer.apiRequest(config['supportCallback'],param).subscribe({
      next:(data)=>{
        if(data.ErrorCode == '1'){
          if(val == 'TL'){
            window.open( 'https://t.me/+'+data.Result,'_blank');
          }else{
            window.open(  'https://api.whatsapp.com/send/?phone='+data.Result+'&amp;text&amp;app_absent=0','_blank');
          }
        }else{
          this.apiSer.showAlert('',data.ErrorMessage,'error');
        }
      },
      error:(err)=>{

      }
    })
  }
}
