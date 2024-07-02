import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComFunService } from 'src/app/main/service/com-fun.service';
import { CommonServiceService } from 'src/app/main/service/common-service.service';

@Component({
  selector: 'app-teenpatti',
  templateUrl: './teenpatti.component.html',
  styleUrl: './teenpatti.component.css'
})
export class TeenpattiComponent implements OnInit {
  isSmallScreen:boolean=false;
  panels = [
    {
      active: false,
      name: '1. How to play Teen Patti?',
      disabled: false,
      content:`Teen Patti is a card game played with a 52 deck card pack by a group of 3 to 6 players. Every player in the
                game is dealt with three cards, facing down. A bet sum is decided and gathered from the players, before
                the cards are dealt. This is the minimum stake sum put into the pot. The winner of the game accumulates
                this pot cash. In a Teen patti game, the player with the greatest hand is announced the winner, securing the
                pot cash.
                `
    },
    {
      active: false,
      disabled: false,
      name: '2. Can I ask for a sideshow from any gamer playing the hand?',
      content: `No, you can only ask for a sideshow from the games who have placed the final bet. In addition, the
                sideshow alternative is accessible only when the other gamer who has placed the final bet is not playing
                blind.`
    },
    {
      active: false,
      disabled: false,
      name: '3. In teen patti, which are the best hands?',
      content: `Kindly view the instances below to know the hand rankings, <br>
          Straight flush<br>
          Three of a kind<br>
          Colour<br>
          Straight<br>
          High card<br>
          Pair<br>`
    },
    {
      active: false,
      disabled: false,
      name: '4. Can we select a joker in teen patti?',
      content: `Unfortunately, Kheloo casino classic Teen Patti doesn’t does not have any alternatives to select a
                joker. The fate of your hand is entirely based on the rankings of the three cards dealt to you, and your
                skills. Joker might be utilised in any other forms of the game if accessible.`
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
    this.comFun.loginCheck();
  }
}
}
