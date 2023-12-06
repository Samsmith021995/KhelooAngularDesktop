import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from './service/common-service.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  isSmallScreen!:boolean;
  constructor(private commonSer:CommonServiceService){}
  ngOnInit(): void {
    this.commonSer.myVariable$.subscribe((width)=>{
      this.isSmallScreen = width === "true";
    });
  }
}
