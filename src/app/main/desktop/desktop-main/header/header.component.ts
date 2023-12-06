import { Component,AfterViewInit } from '@angular/core';
import { CommonServiceService } from 'src/app/main/service/common-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  implements AfterViewInit{
  isSmallScreen:boolean = false;
  constructor(private commSer:CommonServiceService){}
  ngAfterViewInit() {
    this.checkScreenSize();
    this.commSer.myVariable$.subscribe((width) => {
      this.isSmallScreen = width === 'true';
    });
  }
  private checkScreenSize() {
    let screenWidth = window.screen.width;
    this.isSmallScreen = screenWidth < 767;
    this.commSer.updateMyVariable(this.isSmallScreen ? 'true' : 'false');
  }
}
