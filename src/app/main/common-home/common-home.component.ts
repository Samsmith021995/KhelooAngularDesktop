import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../service/common-service.service';

@Component({
  selector: 'app-common-home',
  templateUrl: './common-home.component.html',
  styleUrl: './common-home.component.css'
})
export class CommonHomeComponent implements OnInit{
  isSmallScreen!:boolean;
  constructor(private commonSer:CommonServiceService){}
  ngOnInit(): void {
    this.commonSer.myVariable$.subscribe((width)=>{
      this.isSmallScreen = width === "true";
    });
  }
}
