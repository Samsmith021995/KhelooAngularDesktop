import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrl: './tournaments.component.css'
})
export class TournamentsComponent {
  activatedC:string = 'tournament';
  subCate:string = '';
  scrlRight:boolean = true;
  scrlLeft:boolean = false;
  @ViewChild('showScroll') showScroll!:ElementRef<any>;
  activateTab(item:string){
    this.activatedC = item;
  }
  subCategory(item:string){
this.subCate = item;
  }
  scrollLeft(item:string){
    let nativeElement = this.showScroll.nativeElement;
    if(item === 'prev'){
      nativeElement.scrollLeft -= 300 ;
      this.scrlLeft = false;
      this.scrlRight = true;
    }else if(item === 'next'){
      nativeElement.scrollLeft += 300 ;
      this.scrlLeft = true;
      this.scrlRight = false;
    }

  }
}
