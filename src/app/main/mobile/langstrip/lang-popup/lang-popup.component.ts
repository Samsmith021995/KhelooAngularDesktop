import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lang-popup',
  templateUrl: './lang-popup.component.html',
  styleUrl: './lang-popup.component.css'
})
export class LangPopupComponent implements OnInit {
  @Output() onCancel = new EventEmitter<any>;
ngOnInit(): void {
  
}

close(){
  this.onCancel.emit();
}
}
