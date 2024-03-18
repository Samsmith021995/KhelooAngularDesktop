import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-promotion-video',
  templateUrl: './promotion-video.component.html',
  styleUrl: './promotion-video.component.css'
})
export class PromotionVideoComponent {
  @ViewChild('slides') slide!: ElementRef<any>;
  left:boolean = true;
  right:boolean = false;
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
}
