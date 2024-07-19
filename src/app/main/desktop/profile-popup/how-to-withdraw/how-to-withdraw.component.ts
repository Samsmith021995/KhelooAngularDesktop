import { Component, OnInit } from '@angular/core';
import { ComFunService } from 'src/app/main/service/com-fun.service';

@Component({
  selector: 'app-how-to-withdraw',
  templateUrl: './how-to-withdraw.component.html',
  styleUrl: './how-to-withdraw.component.css'
})
export class HowToWithdrawComponent implements OnInit {
  constructor(private comFun:ComFunService) { }
  cdn = this.comFun.cdn;
ngOnInit(): void {
  
}
}
