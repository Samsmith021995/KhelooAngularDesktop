import { Component, ViewChild, ElementRef, AfterViewInit, OnInit, Input, EventEmitter,Output } from '@angular/core';
import Swiper from 'swiper';
import { CommonServiceService } from '../../service/common-service.service';
import { Router } from '@angular/router';
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
 @Input() location:boolean = false;
 @Input() clickBanner:boolean = false;
 @Output() bannerClick = new EventEmitter<any>;
  ngOnInit(): void {

  }
  constructor(private comSer:CommonServiceService,private router:Router){}
   
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
        loop: true,
        slidesPerView: this.slidesPerView,
        spaceBetween: 3,
      });
    }
    searchData(search:any){
      // localStorage.setItem('search',search);
      // this.comSer.sendSearchData(search);
      this.router.navigate(['game-provider',search]);
    }
    submitData(ref:any,redirect:any){
      this.bannerClick.emit(ref);
      // console.log(redirect);
      this.router.navigate([redirect]);
    }
}
