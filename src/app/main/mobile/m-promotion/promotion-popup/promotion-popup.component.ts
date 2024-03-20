import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-promotion-popup',
  templateUrl: './promotion-popup.component.html',
  styleUrl: './promotion-popup.component.css'
})
export class PromotionPopupComponent {
@Output() onCancel = new EventEmitter<any>;
@Input() promoref!:string;
  Onclose(){
    this.onCancel.emit();
  }
}
