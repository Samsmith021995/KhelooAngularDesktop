import { HtmlParser } from '@angular/compiler';
import { Component, ElementRef, ViewChild,Renderer2, AfterViewInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-promotion-video',
  templateUrl: './promotion-video.component.html',
  styleUrl: './promotion-video.component.css'
})
export class PromotionVideoComponent{
  @ViewChild('iframe') iframe!: ElementRef<HTMLIFrameElement>;
  @ViewChild('slides') slide!: ElementRef<any>;
  @ViewChild('videoiframe') videoI!: TemplateRef<any>
  @ViewChild('videoiframe1') videoI1!: TemplateRef<any>
  left:boolean = true;
  right:boolean = false;
  constructor(private dailog:MatDialog) { }

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
  
  openVideo(param:string){
    let dialogRef :any;
    if(param == '1'){
      dialogRef = this.dailog.open(this.videoI,{width:'100%', panelClass: 'screen-video',});
    
      
    }else if(param == '2'){
      dialogRef = this.dailog.open(this.videoI1,{width:'100%'});

    }
    dialogRef.afterOpened().subscribe(() => {
      // When the dialog is opened, trigger the play action on the video
      const iframeElement = this.iframe.nativeElement;
      iframeElement.addEventListener('load', () => {
        const contentWindow = iframeElement.contentWindow;
        if (contentWindow) {
          const videoElement = contentWindow.document.querySelector('video');
          if (videoElement) {
            // Play the video when the iframe content is loaded
            videoElement.play();
          }
        }
      });
    });
  }
}

