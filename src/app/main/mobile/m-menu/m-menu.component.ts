import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-m-menu',
  templateUrl: './m-menu.component.html',
  styleUrl: './m-menu.component.css',
})
export class MMenuComponent implements OnInit {
  @Output() onCancel = new EventEmitter<any>();
  @Output() onFilter = new EventEmitter<any>();
  constructor(){}
  ngOnInit(): void {
    
  }
  closepopup(){
    this.onCancel.emit();
  }
  SelectGame(item:string){
    this.onFilter.emit(item);
    this.onCancel.emit();
  }
}
