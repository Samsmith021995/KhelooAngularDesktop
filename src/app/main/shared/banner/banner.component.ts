import { Component, ViewChild, ElementRef, AfterViewInit, OnInit, Input } from '@angular/core';
import Swiper from 'swiper';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements AfterViewInit {
  @ViewChild('swiper', { static: false }) swiperEl?: ElementRef;
  swiper?: Swiper;
 @Input() images:any = [];
  ngOnInit(): void {

  }
   
    ngAfterViewInit() {
      this.swiper = new Swiper(this.swiperEl?.nativeElement, {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: true,
        },
        loop: true
      });
    }

}
