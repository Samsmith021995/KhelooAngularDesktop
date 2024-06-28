import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComFunService } from 'src/app/main/service/com-fun.service';
import { CommonServiceService } from 'src/app/main/service/common-service.service';

@Component({
  selector: 'app-blackjack',
  templateUrl: './blackjack.component.html',
  styleUrl: './blackjack.component.css'
})
export class BlackjackComponent implements OnInit {
  isSmallScreen: boolean = false;
  panels = [
    {
      active: false,
      name: '1. What blackjack game can I play on Kheloo?',
      disabled: false,
      content: "Kheloo’s blackjack variants choices are tailored to match players with different skill levels and preferences. The lineup includes European, American, Multi-hand and Single blackjack, among others. These games are powered by the market suppliers such as Ezugi and Evolution, so you can depend on engaging gameplay and high-quality graphics."
    },
    {
      active: false,
      disabled: false,
      name: '2. What’s the variation among land-based blackjack and online blackjack?',
      content: "One the blackjack game is played in person, and the other is played digitally. You can experience a much more cost-effective, comfortable and easy blackjack session online. Online there is no requirement for accommodation and travel expenses, and you don't have to worry about being judged by other players."
    },
    {
      active: false,
      disabled: false,
      name: '3. What is the finest strategy for playing blackjack?',
      content: "The most famous and best blackjack tactic is the basic strategy. It includes an inclusive set of guidelines for decision-making in the game, decided by the dealer’s upcard and your hand."
    },
    {
      active: false,
      disabled: false,
      name: '4. Is blackjack a game of luck or skill?',
      content: "Blackjack is a gambling game that merges components of luck and skill. Since bettors can calculate probabilities and odds in blackjack, there is a definite skill-based element. Although luck plays a major role in the results of blackjack games. It is said that the more skilled a player is the luckier they get."
    }
  ];
  constructor(private commSer: CommonServiceService, private router: Router, private comFun: ComFunService) { }
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
