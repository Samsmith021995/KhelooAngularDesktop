import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComFunService } from 'src/app/main/service/com-fun.service';
import { CommonServiceService } from 'src/app/main/service/common-service.service';

@Component({
  selector: 'app-andar-bahar',
  templateUrl: './andar-bahar.component.html',
  styleUrl: './andar-bahar.component.css'
})
export class AndarBaharComponent implements OnInit {
  isSmallScreen: boolean = false;
  constructor(private commSer: CommonServiceService, private router: Router,private comFun:ComFunService) { }
  ngOnInit(): void {
    this.commSer.myVariable$.subscribe((width) => {
      this.isSmallScreen = width === "true";
    });

  }
  navigateRegister() {
    if (this.isSmallScreen) {
      this.router.navigate(['/signup']);
    } else {
      this.comFun.loginCheck();

    }
  }
}