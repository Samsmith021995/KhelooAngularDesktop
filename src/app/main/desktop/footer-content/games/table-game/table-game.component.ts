import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComFunService } from 'src/app/main/service/com-fun.service';
import { CommonServiceService } from 'src/app/main/service/common-service.service';

@Component({
  selector: 'app-table-game',
  templateUrl: './table-game.component.html',
  styleUrl: './table-game.component.css'
})
export class TableGameComponent implements OnInit {
  isSmallScreen: boolean = false;
  panels = [
    {
      active: false,
      name: '1. How much cash do you require to play table games?',
      disabled: false,
      content: `You can play online table games quite cheaply. Numerous online casinos permit you to gamble for as little as Rs. 100 per hand. Land-based casinos, meanwhile, feature standard bets of between Rs. 500 and Rs. 1000 . <br>
       Gaming websites even permit you to play for free after fulfilling the registration. Free gaming provides you the opportunity to attempt different games and/or practice strategies.`,
    },
    {
      active: false,
      disabled: false,
      name: '2. What casino has the finest table games?',
      content: `A majority of online casinos feature the same standard package of table games. However, you may discover separation from platform to platform.
      <br>For example, one casino may offer the greatest Texas Hold’em while the next doesn’t. Likewise, a gaming platform might feature live dealer games while its rivals don’t.<br> 
      You should also take into consideration your preferred software suppliers before determining who offers the finest online table games.`
    },
    {
      active: false,
      disabled: false,
      name: '3. Why is the percentage lesser for slot machines than for table games?',
      content: `Slot machines hold a greater percentage of your bets for a couple of reasons:<br>
             <ol class="extra">
                <li>
                    <span>
                        They need smaller standard bets

                    </span>
                </li>
                <li>
                    <span>
                        Slots don’t attribute any strategy

                    </span >
                </li>
                <li>
                    <span>
                        Slot machines are normally famous irrespective of greater house edges.

                    </span>
                </li>
            </ol><br>
             You can play numerous online slot games for just Rs. 50 or less per spin. Casinos need to counteract
                this diminished standard bet with a larger percentage hold to still make their surplusses.<br>
               Regarding the second point, a majority of table bettors don’t utilize optimal strategy. A blackjack
                player, for instance, may surrender a 4% house edge rather than the least possible 0.5% house advantage.<br>  
                Finally, numerous slots players realize that they’re going up against a losing scheme. They keep
                playing, though, in hopes of winning large.

      `
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
      // this.router.navigate(['/register']);
      this.comFun.loginCheck();

    }
  }
}
