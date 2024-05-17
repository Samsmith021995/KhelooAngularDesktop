import { Component, OnInit } from '@angular/core';
import { ComFunService } from '../../service/com-fun.service';

@Component({
  selector: 'app-desktop-home',
  templateUrl: './desktop-home.component.html',
  styleUrl: './desktop-home.component.css',
})
export class DesktopHomeComponent implements OnInit {
  slidesPerViewn: number = 2;
  images = [];
  constructor(private comfun: ComFunService) { }
  ngOnInit(): void {
    this.bannnerImage();
  }

  bannnerImage() {
    this.comfun.getCDNData('banner').subscribe({
      next: (res: any) => {
        this.images = res
      },
      error: err => {
        console.error(err);
      }
    })
  }
  clickVal(val: any) {

  }
}
