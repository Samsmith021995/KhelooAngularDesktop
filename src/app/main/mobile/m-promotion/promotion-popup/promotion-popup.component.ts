import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-promotion-popup',
  templateUrl: './promotion-popup.component.html',
  styleUrl: './promotion-popup.component.css'
})
export class PromotionPopupComponent {
@Output() onCancel = new EventEmitter<any>;

  Onclose(){
    this.onCancel.emit();
  }
}
