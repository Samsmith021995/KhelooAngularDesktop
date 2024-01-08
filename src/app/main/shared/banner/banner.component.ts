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
 @Input() slidesPerView:any = [];
 @Input() pagination:boolean = true;
 @Input() prevNext:boolean = true;
  ngOnInit(): void {

  }
   
    ngAfterViewInit() {
      this.swiper = new Swiper(this.swiperEl?.nativeElement, {
        ...(this.prevNext ? { 
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        } : {}),
        ...(this.pagination ? {
          
          pagination: {
              el: '.swiper-pagination',
          },
      } : {}),
       
        scrollbar: {
          el: '.swiper-scrollbar',
        },
       
        autoplay: {
          delay: 5000,
          disableOnInteraction: true,
        },
        // loop: true,
        slidesPerView: this.slidesPerView,
        spaceBetween: 3,
      });
    }

}
