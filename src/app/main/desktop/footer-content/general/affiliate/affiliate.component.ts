import { Component, OnInit } from '@angular/core';
import { ComFunService } from 'src/app/main/service/com-fun.service';

@Component({
  selector: 'app-affiliate',
  templateUrl: './affiliate.component.html',
  styleUrl: './affiliate.component.css'
})
export class AffiliateComponent implements OnInit {

   cdn :string= 'https://cdn.fairbet91.com/KHELOO/content/'
   constructor(private comFun:ComFunService){

   }
   ngOnInit(): void {
     
   }
   becomeAff(){
    this.comFun.loginCheck();
   }
}
