import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ComFunService } from 'src/app/main/service/com-fun.service';
import { CommonServiceService } from 'src/app/main/service/common-service.service';

@Component({
  selector: 'app-baccarat',
  templateUrl: './baccarat.component.html',
  styleUrl: './baccarat.component.css'
})
export class BaccaratComponent {
  isSmallScreen:boolean=false;
  panels = [
    {
      active: false,
      name: '1. Does Kheloo casino have live baccarat ?',
      disabled: false,
      content:"Yes, we provide a broad variety of live baccarat games with different themes, which include Hindi Speed Baccarat, Lightning Baccarat, Golden Wealth Baccarat and a ton others."
    },
    {
      active: false,
      disabled: false,
      name: '2. Are there any baccarat bonuses at Kheloo casino ?',
      content:"Bettors can enjoy generous promotions and bonuses at Kheloo, beginning from our abundant welcome deposit bonus. Unless stated otherwise in the bonus terms and conditions, you can utilise the bonus credits to play the game of baccarat. Just remember to pay attention to the betting necessities and staking contributions."
    },
    {
      active: false,
      disabled: false,
      name: '3. Can I play the game of online baccarat on my mobile ?',
      content:"Yes, all of our baccarat games are cell phone compatible. To have the absolute probable baccarat experience on your cell phones, we recommend you download our proprietary Kheloo mobile application."
    }
  ];
  constructor(private commSer:CommonServiceService, private router:Router,private comFun:ComFunService) { }
  cdn= this.comFun.cdn;
ngOnInit(): void {
  this.commSer.myVariable$.subscribe((width)=>{
    this.isSmallScreen = width === "true";
  });
  
}
navigateRegister(){
  if(this.isSmallScreen){
    this.router.navigate(['/signup']);
  }else{
    this.comFun.loginCheck();

  }
}
}
