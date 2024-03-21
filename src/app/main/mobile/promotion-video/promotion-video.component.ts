import { HtmlParser } from '@angular/compiler';
import { Component, ElementRef, ViewChild,Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-promotion-video',
  templateUrl: './promotion-video.component.html',
  styleUrl: './promotion-video.component.css'
})
export class PromotionVideoComponent implements AfterViewInit{
  @ViewChild('slides') slide!: ElementRef<any>;
  @ViewChild('video1') video1!: ElementRef<HTMLIFrameElement>;
  @ViewChild('video2') video2!: ElementRef<HTMLIFrameElement>;
  left:boolean = true;
  right:boolean = false;
  constructor(private renderer: Renderer2) { }
  ngAfterViewInit() {
    // this.attachEventListeners(this.video1.nativeElement);
    this.video1.nativeElement.addEventListener('load', () => {
      const contentWindow = this.video1.nativeElement.contentWindow;
      console.log(contentWindow);
      if (contentWindow) {
        const videoElement = contentWindow.document.querySelector('video');
        if (videoElement) {
          // Access the video element and perform actions here
        }
      }
    });
    // this.attachEventListeners(this.video2.nativeElement);
  }
  scrollLeft() {
    this.left = !this.left;
    this.right = !this.right;
   this.slide.nativeElement.scrollLeft -= 300;
  }
  
  scrollRight() {
    this.left = !this.left;
    this.right = !this.right;
    this.slide.nativeElement.scrollLeft += 300;
  }

  isLeftDisabled(): boolean {
    return this.slide.nativeElement.scrollLeft === 0;
  }

  isRightDisabled(): boolean {
    return this.slide.nativeElement.scrollLeft === (this.slide.nativeElement.scrollWidth - this.slide.nativeElement.clientWidth);
  }
  
  // attachEventListeners(iframe: HTMLIFrameElement) {
  //   console.log(iframe);
  //   iframe.addEventListener('play', () => {
  //     this.renderer.setStyle(iframe, 'width', '100%');
  //   });

  //   iframe.addEventListener('pause', () => {
  //     this.renderer.setStyle(iframe, 'width', '85%');
  //   });
  // }
  attachEventListeners(iframe: HTMLIFrameElement) {
    iframe.addEventListener('load', () => {
      const contentWindow = iframe.contentWindow;
      if (contentWindow) {
        console.log(contentWindow);
        
        // const videoElement = contentWindow.document.querySelector('video');
        // if (videoElement) {
        //   videoElement.addEventListener('playing', () => {
        //     this.renderer.setStyle(iframe, 'width', '100%');
        //   });
        //   videoElement.addEventListener('pause', () => {
        //     this.renderer.setStyle(iframe, 'width', '85%');
        //   });
        // }
      }
    });
  }
}

