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
  ondays:any;
  onSec:any;
  onMin:any;
  onHour:any;
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

  //
   second = 1000;
  minute = this.second * 60;
  hour = this.minute * 60;
  day = this.hour * 24;

 ongoing_countDown :any = new Date('Jul 29, 2020 00:00:00').getTime();
  x = setInterval( () => {
      let now = new Date().getTime(),
          distance = this.ongoing_countDown - now;

      this.ondays = Math.floor(distance / (this.day));
      this.onHour = Math.floor((distance % (this.day)) / (this.hour));
      this.onMin = Math.floor((distance % (this.hour)) / (this.minute));
      this.onSec = Math.floor((distance % (this.minute)) / this.second);

  }, this.second);


  
}
