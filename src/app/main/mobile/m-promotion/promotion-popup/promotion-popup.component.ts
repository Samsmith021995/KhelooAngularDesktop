import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-promotion-popup',
  templateUrl: './promotion-popup.component.html',
  styleUrl: './promotion-popup.component.css'
})
export class PromotionPopupComponent implements OnInit {
  @Output() onCancel = new EventEmitter<any>;
  @Input() promoref: any;
  htmlcon: string = ''
  Onclose() {
    this.onCancel.emit();
  }
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.getHtmlContent(this.promoref.content).subscribe({
      next: (res) => {
        this.htmlcon = res;
      },
      error: err => console.error(err)
    });
  }
  getHtmlContent(url: string) {
    return this.http.get(url, { responseType: 'text' });
  }
}
