import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/main/service/api.service';

@Component({
  selector: 'app-lang-popup',
  templateUrl: './lang-popup.component.html',
  styleUrl: './lang-popup.component.css'
})
export class LangPopupComponent implements OnInit {
  @Output() onCancel = new EventEmitter<any>;
  constructor(private apiSer:ApiService){}
ngOnInit(): void {
  
}

close(){
  this.onCancel.emit();
}
changelanguage(item:string){
  this.apiSer.googleTranslateElementInit(item);
}
}
