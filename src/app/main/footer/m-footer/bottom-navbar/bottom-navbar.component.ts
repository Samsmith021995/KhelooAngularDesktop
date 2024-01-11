import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/main/service/api.service';
import { CommonServiceService } from 'src/app/main/service/common-service.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottom-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrl: './bottom-navbar.component.css'
})
export class BottomNavbarComponent implements OnInit, OnDestroy {
  @ViewChild('register') register!: TemplateRef<any>;
  @ViewChild('mainMenu') mainMenu!: TemplateRef<any>;
  isLoggedIn: boolean = false;
  diaRef1: any;
  diaRef2: any;
  showSp: boolean = false;
  private isLoggedInSubscription!: Subscription;
  selectedMenu: string = '';
  circular: boolean = false;
  constructor(private dialog: MatDialog, private comSer: CommonServiceService, public apiSer: ApiService, private router: Router) { }
  ngOnInit(): void {
    this.isLoggedInSubscription = this.apiSer.isLoggedIn$.subscribe((value) => {
      this.isLoggedIn = value;
    });

  }
  openRegister() {
    this.diaRef1 = this.dialog.open(this.register, {
      height: '900x',
      width: '600px',
      panelClass: 'screen-dialog',
    });
    this.diaRef1.afterClosed().subscribe(() => { });
  }
  openMenu() {
    this.diaRef2 = this.dialog.open(this.mainMenu, {
      height: '900x',
      width: '600px',
      panelClass: 'screen-dialog',
    });
    this.diaRef2.afterClosed().subscribe(() => { });
  }

  updateData(search: any) {
    this.selectedMenu = search;
    this.comSer.sendSearchData(search);
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
    this.showSp = !this.showSp;
  }
  gameStart(param: any) {
    this.router.navigate(['/games', param]);
  }
  navigate(item: string) {
    this.router.navigate(['m-deposit', item]);
  }
  circularOpen() {
    this.circular = !this.circular;
  }
}
