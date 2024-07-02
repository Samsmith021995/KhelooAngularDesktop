import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComFunService } from 'src/app/main/service/com-fun.service';
import { CommonServiceService } from 'src/app/main/service/common-service.service';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrl: './slots.component.css'
})
export class SlotsComponent implements OnInit{
  isSmallScreen:boolean=false;
  panels = [
    {
      active: false,
      name: '1. How exactly do online slots function?',
      disabled: false,
      content: "The online slots games are powered by an irregular number generator that decides the amount and chance of winning. It computes the outcome quickly."
    },
    {
      active: false,
      disabled: false,
      name: '2. What are the most famous online slot games?',
      content: "On Kheloo, we have a wide selection of slots online to play. All of them are classified by software suppliers, fame, themes and others. Select the one you like the most and begin playing. All of them warrant the best gambling experience."
    },
    {
      active: false,
      disabled: false,
      name: '3. Can I play slots on my mobile phone?',
      content: "Indeed you can! Online casino Kheloo offers its gamers with a modern and convenient mobile app where they can indulge in slots online and bet on sports from anywhere in the world."
    },
    {
      active: false,
      disabled: false,
      name: '4. Can I win real cash playing slots?',
      content: "Yes, you can also win a jackpot! Slots casinos are primarily luck dependent games, so all that you need to do is just play! All online slots, accessible on Kheloo, pay real cash that is if you win. We have a broad array of accessible payment choices so you can simply withdraw your winnings. So play slots online and get real cash."
    },
    {
      active: false,
      disabled: false,
      name: '5. What is RTP?',
      content: "RTP stands for percentage of return of the slot to the player. This value showcases how high the possibility of succeeding in the slot machine is and how much of the bettors’ deposited funds will return as a win."
    },
    {
      active: false,
      disabled: false,
      name: '6. What Slots offer the best bonuses?',
      content: "Kheloo online casino offers its customers with slot games in which they can attain different bonuses, these can be both bonus coins and free spins."
    },
    {
      active: false,
      disabled: false,
      name: '7. What are the odds of winning online slots?',
      content: "In slots online, the possibility of your winning is based on your luck since the algorithms for losing or winning are based on an aimless number generator that can’t be hacked or tricked."
    },
    {
      active: false,
      disabled: false,
      name: '8. Are Slots actually safe to play? ',
      content: "It is indeed safe to play online slots, but you have to keep in mind to always play responsibly and never exceed your financial limit."
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
