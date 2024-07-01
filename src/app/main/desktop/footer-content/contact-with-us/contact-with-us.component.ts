import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-contact-with-us',
  templateUrl: './contact-with-us.component.html',
  styleUrl: './contact-with-us.component.css'
})
export class ContactWithUsComponent implements OnInit {
  constructor(private msg:NzMessageService){}
  ngOnInit(): void {
    
  }
  showMsg(){
    this.msg.warning('Comming Soon',{nzDuration:3000})
  }
}
