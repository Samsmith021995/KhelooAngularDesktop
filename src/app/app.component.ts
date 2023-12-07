import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from './main/service/common-service.service';
// import { CommonServiceService } from './service/common-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'KhelooAngularDesktop';
  isSmallScreen!:boolean;
  constructor(private commonSer:CommonServiceService){}
ngOnInit(): void {
  this.commonSer.myVariable$.subscribe((width)=>{
    this.isSmallScreen = width === "true";
  });
  
}
}
