import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/main/service/common-service.service';

@Component({
  selector: 'app-ipl-betting',
  templateUrl: './ipl-betting.component.html',
  styleUrl: './ipl-betting.component.css'
})
export class IplBettingComponent implements OnInit {
  isSmallScreen: boolean = false;
  panels = [
    {
      active: false,
      name: '1. What is IPL betting?',
      disabled: false,
      content:"IPL betting is a famous activity among enthusiasts of the IPL, where bettors place wagers on the league matches with the aim of having fun and making a profit. Kheloo covers the Indian Premier League in detail, which means you can bet on a variety of alternatives for all matches that will take place during the systematic season and the playoffs."
    },
    {
      active: false,
      disabled: false,
      name: '2. How can a player place a bet on an IPL match?',
      content:"Kheloo attributes an intuitive and new player friendly platform that makes it simple to place bets. All you require to do is open an account on the website, which takes roughly 2 minutes, which also includes verification. Following which, you have to deposit using any one of the accessible payment alternatives check a couple of the props provided on the website if you wish to add a spin to things. and select a betting market. You can either bet on singular matches or place outright bets. Of course."
    },
    {
      active: false,
      disabled: false,
      name: '3. What sorts of bets can a player place on IPL matches?',
      content:"Kheloo attributes a variety of bets for the IPL, which include match results, best bowler, match winner and much more. A player can also make outright bets on the successor of the league."
    },
    {
      active: false,
      disabled: false,
      name: '4. Are there any promotions or bonuses provided for IPL betting?',
      content:"Indeed, there are numerous bonuses for regular and new players. Kheloo provides a lucrative welcome bonus on a player's initial deposit, but it doesn’t end there. Once the player has become a regular customer, they can claim recurring betting deals. During the IPL season, Kheloo provides a variety of promotions that can elevate the player’s betting experience, so keep an eye on the promotions page."
    },
    {
      active: false,
      disabled: false,
      name: '5. Can a player use their credit card to deposit cash for IPL betting?',
      content:"Yes, you can. Kheloo presently accepts Mastercard and Visa credit cards for deposits, and both payment alternatives are considered reliable, secure and fast. The player can use them to make quick deposits in Indian rupees."
    }
  ];
  constructor(private commSer: CommonServiceService, private router: Router) { }
  ngOnInit(): void {
    this.commSer.myVariable$.subscribe((width) => {
      this.isSmallScreen = width === "true";
    });
  }
  cdn :string= 'https://cdn.fairbet91.com/KHELOO/content/'
  navigateRegister() {
    if (this.isSmallScreen) {
      this.router.navigate(['/signup']);
    } else {
      this.router.navigate(['/register']);
    }
  }
}
