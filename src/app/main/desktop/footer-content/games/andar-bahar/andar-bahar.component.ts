import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComFunService } from 'src/app/main/service/com-fun.service';
import { CommonServiceService } from 'src/app/main/service/common-service.service';

@Component({
  selector: 'app-andar-bahar',
  templateUrl: './andar-bahar.component.html',
  styleUrl: './andar-bahar.component.css'
})
export class AndarBaharComponent implements OnInit {
  isSmallScreen: boolean = false;
  panels = [
    {
      active: false,
      name: '1. How can Andar Bahar be Played?',
      disabled: false,
      content:"To play Andar Bahar at any online casino for real cash, place a bet on either Bahar or Andar. The dealer deals the cards to both sides and if you bet on the side that gets the card similar to the joker card, you’re declared the winner."
    },
    {
      active: false,
      disabled: false,
      name: '2.  What are the Online Alternatives of Andar Bahar?',
      content:"As you’re playing you’ll come across some alternatives at some of the best casinos to play Andar Bahar. These might include live dealer Andar, Speed Bahr, and the traditional Andar Bahar casino game online."
    },
    {
      active: false,
      disabled: false,
      name: '3. In India, is it Legal to Play Andar Bahar at an Online Casino?',
      content:"No certain law prohibits its citizens from playing Andar Bahar at any online casino. Thus, you can choose any variant of the Andar game and begin betting without fear of any legal trouble."
    },
    {
      active: false,
      disabled: false,
      name: '4. How can I Succeed at the Andar Bahar Casino Game?',
      content:"Andar Bahar is a game of possibilities, so losing or winning is based on your luck. Although, you can grow your odds of succeeding by playing carefully, by taking the benefits of the side bets, managing your finances and placing smaller bets."
    }
  ];
  constructor(private commSer: CommonServiceService, private router: Router,private comFun:ComFunService) { }
  cdn = this.comFun.cdn;
  ngOnInit(): void {
    this.commSer.myVariable$.subscribe((width) => {
      this.isSmallScreen = width === "true";
    });

  }
  navigateRegister() {
    if (this.isSmallScreen) {
      this.router.navigate(['/signup']);
    } else {
      this.comFun.loginCheck();

    }
  }
}