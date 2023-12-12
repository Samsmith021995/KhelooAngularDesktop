import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import Swiper from 'swiper';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements AfterViewInit {
  @ViewChild('swiper', { static: false }) swiperEl?: ElementRef;
  swiper?: Swiper;
 
  ngOnInit(): void {

  }
    images = [
      'https://kheloo.com/images/10minwith.png',
      'https://kheloo.com/images/Banner11.jpg',
      'https://kheloo.com/images/Banner18.jpg',
      'https://kheloo.com/images/Dil-se-kheloo_375x250.jpg',
      'https://kheloo.com/images/10minwith.png',
      'https://kheloo.com/images/Banner11.jpg',
      'https://kheloo.com/images/Banner18.jpg',
      'https://kheloo.com/images/Dil-se-kheloo_375x250.jpg',
      'https://kheloo.com/images/10minwith.png',
      'https://kheloo.com/images/Banner11.jpg',
      'https://kheloo.com/images/Banner18.jpg',
      'https://kheloo.com/images/Dil-se-kheloo_375x250.jpg',
      
    ];
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
