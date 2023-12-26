import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MHomeComponent } from 'src/app/main/common-home/m-home/m-home.component';
import { ApiService } from 'src/app/main/service/api.service';
import { CommonServiceService } from 'src/app/main/service/common-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bottom-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrl: './bottom-navbar.component.css'
})
export class BottomNavbarComponent implements OnInit,OnDestroy {
@ViewChild('register') register!:TemplateRef<any>;
@ViewChild('mainMenu') mainMenu!:TemplateRef<any>;
isLoggedIn: boolean = false;
private isLoggedInSubscription!: Subscription;
constructor(private dialog:MatDialog , private comSer:CommonServiceService,public apiSer:ApiService){}
ngOnInit(): void {
  this.isLoggedInSubscription = this.apiSer.isLoggedIn$.subscribe((value) => {
    this.isLoggedIn = value;
  });

}
openRegister(){
  this.dialog.open(this.register, {
    height: '900x',
    width: '600px',
    panelClass: 'screen-dialog',
  });
}
openMenu(){
  this.dialog.open(this.mainMenu, {
    height: '900x',
    width: '600px',
    panelClass: 'screen-dialog',
  });
}

updateData(search:any){
  this.comSer.sendSearchData(search);
}
seachData(item:any){
  this.comSer.sendSearchData(item);
}
closeDial(){
  this.dialog.closeAll();
}
ngOnDestroy() {
  // this.isLoggedInSubscription.unsubscribe();
}

}
