import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComFunService } from 'src/app/main/service/com-fun.service';
import { CommonServiceService } from 'src/app/main/service/common-service.service';

@Component({
  selector: 'app-poker',
  templateUrl: './poker.component.html',
  styleUrl: './poker.component.css'
})
export class PokerComponent implements OnInit {
  isSmallScreen:boolean=false;
  panels = [
    {
      active: false,
      name: '1. Can a bettor play at the Kheloo casino in India?',
      disabled: false,
      content: "Indeed, you can. Kheloo provides a diversified library of both live dealer and RNG poker games. You can discover our complete offer under the Table Games category."
    },
    {
      active: false,
      disabled: false,
      name: '2. What poker games can a player try out at Kheloo casino?',
      content: "Kheloo attributes numerous different poker choices. For example, you can play games such as Texas Hold’em Poker, Casino Stud Poker and High Hand Hold’em Poker. When it comes to the live choices, you can select from 32 Cards Poker, Casino Hold’em and various versions of Teen Patti, among other  probabilities."
    },
    {
      active: false,
      disabled: false,
      name: '3. Does Kheloo casino provide a poker bonus?',
      content: "Yes, it does. While Kheloo doesn’t have any poker centred bonuses, it does indeed provide an all-included casino welcome bonus and other casino promotions that players can use to play poker games."
    },
    {
      active: false,
      disabled: false,
      name: '4. Can I play Kheloo’s poker games on my cell phone?',
      content: "Yes, you can. Kheloo has committed mobile apps for iOS and Android gadgets. You can download the software right from our site."
    }
  ];
  constructor(private commSer:CommonServiceService, private router:Router,private comFun:ComFunService) { }
  cdn = this.comFun.cdn;
ngOnInit(): void {
  this.commSer.myVariable$.subscribe((width)=>{
    this.isSmallScreen = width === "true";
  });
  
}
navigateRegister(){
  if(this.isSmallScreen){
    this.router.navigate(['/signup']);
  }else{
    // this.router.navigate(['/register']);
    this.comFun.loginCheck();
  }
}
}
