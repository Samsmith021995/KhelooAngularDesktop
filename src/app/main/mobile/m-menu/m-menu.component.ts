import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonServiceService } from '../../service/common-service.service';

@Component({
  selector: 'app-m-menu',
  templateUrl: './m-menu.component.html',
  styleUrl: './m-menu.component.css',
})
export class MMenuComponent implements OnInit {
  @Output() onCancel = new EventEmitter<any>();
  constructor(private comSer:CommonServiceService){}
  ngOnInit(): void {
    
  }
  closepopup(){
    this.onCancel.emit();
  }
  SelectGame(item:string){
    this.comSer.sendSearchData(item);
    this.onCancel.emit();
    // window.scrollTo({
    //   top: 1000,
    //   left: 0,
    //   behavior: 'smooth'
    // });
  }
}
