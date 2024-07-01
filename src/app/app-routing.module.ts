import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './main/desktop/auth/login/login.component';
import { GamePlatformComponent } from './main/desktop/game-platform/game-platform.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginGuard } from './guard/login.guard';
import { NotFoundComponent } from './main/shared/not-found/not-found.component';
import { PokerComponent } from './main/desktop/footer-content/games/poker/poker.component';
import { CasinoComponent } from './main/desktop/footer-content/games/casino/casino.component';
import { TeenpattiComponent } from './main/desktop/footer-content/games/teenpatti/teenpatti.component';
import { AndarBaharComponent } from './main/desktop/footer-content/games/andar-bahar/andar-bahar.component';
import { SlotsComponent } from './main/desktop/footer-content/games/slots/slots.component';
import { BaccaratComponent } from './main/desktop/footer-content/games/baccarat/baccarat.component';
import { RouletteComponent } from './main/desktop/footer-content/games/roulette/roulette.component';
import { BlackjackComponent } from './main/desktop/footer-content/games/blackjack/blackjack.component';
import { AboutUsComponent } from './main/desktop/footer-content/general/about-us/about-us.component';
import { ContactUsComponent } from './main/desktop/footer-content/general/contact-us/contact-us.component';
import { AffiliateComponent } from './main/desktop/footer-content/general/affiliate/affiliate.component';
import { FaqComponent } from './main/desktop/footer-content/general/faq/faq.component';
import { InviteFriendComponent } from './main/desktop/footer-content/general/invite-friend/invite-friend.component';
import { DisclaimerComponent } from './main/desktop/footer-content/security/disclaimer/disclaimer.component';
import { TermConditionComponent } from './main/desktop/footer-content/security/term-condition/term-condition.component';
import { CookiePolicyComponent } from './main/desktop/footer-content/security/cookie-policy/cookie-policy.component';
import { DisconnectionPolicyComponent } from './main/desktop/footer-content/security/disconnection-policy/disconnection-policy.component';
import { PrivacyPolicyComponent } from './main/desktop/footer-content/security/privacy-policy/privacy-policy.component';
import { CricketBettingComponent } from './main/desktop/footer-content/sports/cricket-betting/cricket-betting.component';
import { FootballBettingComponent } from './main/desktop/footer-content/sports/football-betting/football-betting.component';
import { IplBettingComponent } from './main/desktop/footer-content/sports/ipl-betting/ipl-betting.component';
import { OnlineSportsBettingComponent } from './main/desktop/footer-content/sports/online-sports-betting/online-sports-betting.component';
import { TennisBettingComponent } from './main/desktop/footer-content/sports/tennis-betting/tennis-betting.component';
import { MobileGuard } from './guard/mobile.guard';
import { DesktopGuard } from './guard/desktop.guard';
import { KhelooPrivilegesComponent } from './main/desktop/footer-content/games/kheloo-privileges/kheloo-privileges.component';
import { TournamentsComponent } from './main/desktop/footer-content/games/tournaments/tournaments.component';
import { MSignupComponent } from './main/mobile/m-signup/m-signup.component';
import { ThankYouComponent } from './main/shared/thank-you/thank-you.component';
import { GamesProviderWiseComponent } from './main/mobile/games-provider-wise/games-provider-wise.component';
import { MSignup1Component } from './main/mobile/m-signup/m-signup1/m-signup1.component';
import { MPromotionComponent } from './main/mobile/m-promotion/m-promotion.component';
import { GamesCategoryComponent } from './main/desktop/games-category/games-category.component';
import { PokerGameComponent } from './main/desktop/Games/poker-game/poker-game.component';
import { SlotsGameComponent } from './main/desktop/Games/slots-game/slots-game.component';
import { CasinoGameComponent } from './main/desktop/Games/casino-game/casino-game.component';
import { RouletteGameComponent } from './main/desktop/Games/roulette-game/roulette-game.component';
import { LotteryGameComponent } from './main/desktop/Games/lottery-game/lottery-game.component';
import { TeenpatiGameComponent } from './main/desktop/Games/teenpati-game/teenpati-game.component';
import { TablegamesGameComponent } from './main/desktop/Games/tablegames-game/tablegames-game.component';
import { SportsGameComponent } from './main/desktop/Games/sports-game/sports-game.component';
import { PromotionComponent } from './main/desktop/promotion/promotion.component';
import { AndarbaharGameComponent } from './main/desktop/Games/andarbahar-game/andarbahar-game.component';
import { BaccaratGameComponent } from './main/desktop/Games/baccarat-game/baccarat-game.component';
import { BlackjackGameComponent } from './main/desktop/Games/blackjack-game/blackjack-game.component';
import { LoginPopupComponent } from './main/desktop/auth/login-popup/login-popup.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./main/common-home/common-home.module').then(m => m.CommonHomeModule),
      },
      {
        path: 'setting',
        loadChildren: () => import('./main/desktop/setting/setting.module').then(m => m.SettingModule),
        canActivate: [AuthGuard, DesktopGuard],

      },
      {
        path: 'statements',
        loadChildren: () => import('./main/desktop/statement/statement.module').then(m => m.StatementModule),
        canActivate: [AuthGuard, DesktopGuard]
      },
      {
        path: 'withdraw',
        loadChildren: () => import('./main/desktop/withdrawl/withdrawl.module').then(m => m.WithdrawlModule),
        canActivate: [AuthGuard, DesktopGuard]
      },
      {
        path: 'deposit',
        loadChildren: () => import('./main/desktop/deposit/deposit.module').then(m => m.DepositModule),
        canActivate: [AuthGuard, DesktopGuard]
      },
      {
        path: 'promotions',
        loadChildren: () => import('./main/desktop/promotion/promotion.module').then(m => m.PromotionModule),
        data: {
          breadcrumb: '/promotions',
          title: 'Kheloo- Promotion',
          description: ''
        },
        canActivate: [ DesktopGuard]
      },
    
      // {
      //   path: 'poker',
      //   component: PokerComponent,
      //   data: {
      //     title: 'Kheloo- Best Online Poker Games to Earn Real Money',
      //     description: 'Play Online Poker to win some exciting cash rewards and bonuses. Explore the variety of Poker games available on Kheloo.com. 24/7 customer support.'
      //   }
      // },
      // {
      //   path: 'casino',
      //   component: CasinoComponent,
      //   data: {
      //     title: 'Kheloo-Best Online Casino in India to earn real money',
      //     description: 'Kheloo offers the best online casino games like Teen Patti, Blackjack, Slots, Baccarat, Roulette, Poker, and more. Get a welcome bonus of ₹50,000.'
      //   }
      // },
      // {
      //   path: 'teenpatti',
      //   component: TeenpattiComponent,
      //   data: {
      //     title: 'Kheloo-Play Teen Patti Casino Game Online and Win Real Money',
      //     description: 'Play the Teen Patti Game at Kheloo.com and earn real money. Play with friends and people across the world. 24/7 customer support via different means.'
      //   }
      // },
      // {
      //   path: 'andar-bahar',
      //   component: AndarBaharComponent,
      //   data: {
      //     title: 'Kheloo- Andar Bahar Online game to win real money',
      //     description: 'Play a variety of Andar Bahar games like Super Andar Bahar, Live Andar Bahar, and One Touch Andar Bahar. Get exciting rewards and cash bonuses.'
      //   }
      // },
      // {
      //   path: 'slots',
      //   component: SlotsComponent,
      //   data: {
      //     title: 'Best Online Slot Games to Earn Real Money at Kheloo',
      //     description: 'Explore a huge range of slot games like 3 Reel Slots, 5 Reel Slots, 7&9 Reel Slots, and 3D Slots. Visit Kheloo.com now to learn more about slots.'
      //   }
      // },
      // {
      //   path: 'baccarat',
      //   component: BaccaratComponent,
      //   data: {
      //     title: 'Kheloo-Top Online Baccarat Games to win real money',
      //     description: 'Kheloo offers all top-rated Baccarat games where players can play with their friends and online players 24/7. Earn huge bonuses and other rewards.'
      //   }
      // },
      // {
      //   path: 'roulette',
      //   component: RouletteComponent,
      //   data: {
      //     title: 'Kheloo-Play Online Roulette and Win Real Money',
      //     description: 'Play some of the best Roulette games at Kheloo. European, French, 3D, and Live Roulette are some of the popular games. Join and start earning today!'
      //   }
      // },
      // {
      //   path: 'blackjack',
      //   component: BlackjackComponent,
      //   data: {
      //     title: 'Kheloo-Play Online Blackjack for Real Money in India',
      //     description: 'Explore Kheloo for the best online and live Blackjack games like single, multi-hand, and European Blackjack! Get big cash bonuses and rewards.'
      //   }
      // },
      // {
      //   path: 'table-game',
      //   component: TableGameComponent,
      //   data: {
      //     title: 'Kheloo- Top Online Casino Table Games in India',
      //     description: 'Choose from a huge range of online casino table games at Kheloo. Take advantage of the thrilling bonuses and offers. 24/7 customer support assistance.'
      //   }
      // },
      {
        path: 'about-us',
        component: AboutUsComponent,
        data: {
          title: 'About Kheloo | Know all about Kheloo Online Casino, Sports Betting',
          description: 'Want to know more about Kheloo Online Casino site? Find out why we are one of the best, and most trusted online casinos & sports betting sites in India.'
        }
      },
      {
        path: 'contact-us',
        component: ContactUsComponent,
        data: {
          title: 'Contact Kheloo - Best Gaming App in India ',
          description: 'If you have any query about how the Kheloo online gaming app works, how to deposit or claim a bonus, or if you have any other issue, get in touch with us.'
        }
      },
      {
        path: 'affiliates',
        component: AffiliateComponent,
        data: {
          title: 'Affiliates',
          description: ''
        }
      },
      {
        path: 'faq',
        component: FaqComponent,
        data: {
          title: 'FAQs',
          description: ''
        }
      },
      {
        path: 'invite-friend',
        component: InviteFriendComponent,
        data: {
          title: 'InviteFriend',
          description: ''
        }
      },
      {
        path: 'disclaimer',
        component: DisclaimerComponent,
        data: {
          title: 'Disclaimer',
          description: ''
        }
      },
      {
        path: 'term-condition',
        component: TermConditionComponent,
        data: {
          title: 'TermsConditions',
          description: ''
        }
      },
      {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent,
        data: {
          title: 'PrivacyPolicy ',
          description: ''
        }
      },
      {
        path: 'cookie-policy',
        component: CookiePolicyComponent,
        data: {
          title: 'CookiePolicy',
          description: ''
        }
      },
      {
        path: 'disconnection-policy',
        component: DisconnectionPolicyComponent,
        data: {
          title: 'DisconnectionPolicy',
          description: ''
        }
      },
      {
        path: 'cricket-betting',
        component: CricketBettingComponent,
        data: {
          title: 'Kheloo- The Best Online Cricket Betting Site',
          description: 'Have fun betting on top cricket tournaments like IPL, ODI, Twenty20 Cricket World Cup, and more. Top Features include secure payments and bonuses.'
        }
      },
      {
        path: 'football-betting',
        component: FootballBettingComponent,
        data: {
          title: 'Online Football Betting app in India- Kheloo',
          description: 'Kheloo offers a range of football betting markets including all leagues worldwide. UEFA Champions League and La Liga are some of the prominent leagues.'
        }

      },
      {
        path: 'ipl-betting',
        component: IplBettingComponent,
        data: {
          title: 'Top Site for IPL Betting- Kheloo',
          description: 'Explore the world of cricket betting and bet on the finest cricket tournament, the Indian Premier League. Get the latest updates and insights.'
        }
      },
      {
        path: 'online-sports-betting',
        component: OnlineSportsBettingComponent,
        data: {
          title: 'Best Online Sports Betting Platform- Kheloo',
          description: 'Looking for the best site to play sports betting games? Kheloo is here! Bet on different sports like Cricket, Football, Tennis, Kabaddi and more.'
        }
      },
      {
        path: 'tennis-betting',
        component: TennisBettingComponent,
        data: {
          title: 'Online Tennis Betting Betting Game in India- Kheloo',
          description: 'Take advantage of top tennis odds, a range of tennis betting markets, and live betting options at Kheloo. Top tournaments- Grand Slam, Davis Cup.'
        }
      },
      {
        path: 'privileges',
        component: KhelooPrivilegesComponent,
        data: {
          title: 'Privileges',
          description: ''
        }
      },
      {
        path: 'tournaments',
        component: TournamentsComponent
      },
      //Mobile Start by Ashutosh

      {
        path: 'm-setting',
        loadChildren: () => import('./main/mobile/m-setting/m-setting.module').then(m => m.MSettingModule),
        canActivate: [AuthGuard, MobileGuard]
      },
      {
        path: 'm-withdraw',
        loadChildren: () => import('./main/mobile/withdraw/withdraw.module').then(m => m.WithdrawModule),
        canActivate: [AuthGuard, MobileGuard]
      },
      {
        path: 'm-deposit/:amount',
        loadChildren: () => import('./main/mobile/m-deposit/m-deposit.module').then(m => m.MDepositModule),
        canActivate: [AuthGuard, MobileGuard]
      },
      {
        path: 'm-statements',
        loadChildren: () => import('./main/mobile/m-statement/m-statement.module').then(m => m.MStatementModule),
        canActivate: [AuthGuard, MobileGuard]
      },
      {
        path: 'game-provider/:provider',
        component: GamesProviderWiseComponent,
        canActivate: [ MobileGuard]
      },
      {
        path: 'thankyou',
        component: ThankYouComponent,
        canActivate: []
      },
      //new desktop path
      {
        path: 'gamesCat/:id',
        component: GamesCategoryComponent,
        canActivate: [DesktopGuard]
      },
      {
        path: 'casino',
        component: CasinoGameComponent,
        data: {
          breadcrumb: '/casino',
          title: 'Kheloo-Best Online Casino in India to earn real money',
          description: 'Kheloo offers the best online casino games like Teen Patti, Blackjack, Slots, Baccarat, Roulette, Poker, and more. Get a welcome bonus of ₹50,000.'
        },
        canActivate: [DesktopGuard]
      },
      {
        path: 'poker',
        component: PokerGameComponent,
        data: {
          breadcrumb: '/poker',
          title: 'Kheloo- Best Online Poker Games to Earn Real Money',
          description: 'Play Online Poker to win some exciting cash rewards and bonuses. Explore the variety of Poker games available on Kheloo.com. 24/7 customer support.'
        },
        canActivate: [DesktopGuard]
      },
      {
        path: 'slots',
        component: SlotsGameComponent,
        data: {
          breadcrumb: '/slots',
          title: 'Best Online Slot Games to Earn Real Money at Kheloo',
          description: 'Explore a huge range of slot games like 3 Reel Slots, 5 Reel Slots, 7&9 Reel Slots, and 3D Slots. Visit Kheloo.com now to learn more about slots.'
        },
        canActivate: [DesktopGuard]
      },
      {
        path: 'table',
        component: TablegamesGameComponent,
        data: {
          breadcrumb: '/table',
          title: 'Kheloo- Top Online Casino Table Games in India',
          description: 'Choose from a huge range of online casino table games at Kheloo. Take advantage of the thrilling bonuses and offers. 24/7 customer support assistance.'
        },
        canActivate: [DesktopGuard]
      },
      
      {
        path: 'roulette',
        component: RouletteGameComponent,
        data: {
          breadcrumb: '/roulette',
          title: 'Kheloo-Play Online Roulette and Win Real Money',
          description: 'Play some of the best Roulette games at Kheloo. European, French, 3D, and Live Roulette are some of the popular games. Join and start earning today!'
        },
        canActivate: [DesktopGuard]
      }
      ,
      {
        path: 'lottery',
        component: LotteryGameComponent,
        canActivate: [DesktopGuard],
        data:{
          breadcrumb: '/lottery',
        }
      }
      ,
      {
        path: 'teenpatti',
        component: TeenpatiGameComponent,
        data: {
          breadcrumb: '/teenpatti',
          title: 'Kheloo-Play Teen Patti Casino Game Online and Win Real Money',
          description: 'Play the Teen Patti Game at Kheloo.com and earn real money. Play with friends and people across the world. 24/7 customer support via different means.'
        },
        canActivate: [DesktopGuard]
      }
      ,
      {
        path: 'sports',
        component: SportsGameComponent,
        canActivate: [DesktopGuard],
        data:{
          breadcrumb: '/sports',
        }
      },
      {
        path: 'andarbahar',
        component: AndarbaharGameComponent,
        data: {
          breadcrumb: '/andarbahar',
          title: 'Kheloo- Andar Bahar Online game to win real money',
          description: 'Play a variety of Andar Bahar games like Super Andar Bahar, Live Andar Bahar, and One Touch Andar Bahar. Get exciting rewards and cash bonuses.'
        },
        canActivate: [DesktopGuard]
      },
      {
        path: 'baccarat',
        component: BaccaratGameComponent,
        data: {
          breadcrumb: '/baccarat',
          title: 'Kheloo-Top Online Baccarat Games to win real money',
          description: 'Kheloo offers all top-rated Baccarat games where players can play with their friends and online players 24/7. Earn huge bonuses and other rewards.'
        },
        canActivate: [DesktopGuard]
      },
      {
        path: 'blackjack',
        component: BlackjackGameComponent,
        data: {
          breadcrumb: '/blackjack',
          title: 'Kheloo-Play Online Blackjack for Real Money in India',
          description: 'Explore Kheloo for the best online and live Blackjack games like single, multi-hand, and European Blackjack! Get big cash bonuses and rewards.'
        },
        canActivate: [DesktopGuard]
      },
      {
        path: 'loginpop',
        component: LoginPopupComponent,
        outlet:'popup',
        canActivate: [DesktopGuard]
      }
    ]
  },
  {
    path: 'promotion',
    component: MPromotionComponent,
    data: {
      title: 'Kheloo- Promotion',
      description: ''
    },
    canActivate:[MobileGuard]
  },

  {
    path: 'signup',
    component: MSignupComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'signupv1',
    component: MSignup1Component,
    canActivate: [LoginGuard]
  },
  // {
  //   path: 'signupv2',
  //   component: MSignup2Component,
  //   canActivate: [LoginGuard]
  // },
  { path: 'SignUp', redirectTo: '/signup', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'register',
    component: MSignupComponent,
    canActivate: [LoginGuard],
    data: {
      title: 'Register- Kheloo',
      description: ''
    }
  },
  {
    path: 'games/:id',
    component: GamePlatformComponent,
    canActivate: [AuthGuard]
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
