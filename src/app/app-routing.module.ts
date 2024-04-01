import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './main/desktop/auth/login/login.component';
import { RegisterComponent } from './main/desktop/auth/register/register.component';
import { ForgotPasswordComponent } from './main/desktop/auth/forgot-password/forgot-password.component';
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
import { TableGameComponent } from './main/desktop/footer-content/games/table-game/table-game.component';
import { ThankYouComponent } from './main/shared/thank-you/thank-you.component';
import { GamesProviderWiseComponent } from './main/mobile/games-provider-wise/games-provider-wise.component';
import { MSignup1Component } from './main/mobile/m-signup/m-signup1/m-signup1.component';


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
        path: 'change-password',
        loadChildren: () => import('./main/desktop/auth/change-password/change-password.module').then(m => m.ChangePasswordModule),
        canActivate: [AuthGuard, DesktopGuard]
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
        path: 'promotion',
        loadChildren: () => import('./main/desktop/promotion/promotion.module').then(m => m.PromotionModule),
        data: {
          title: 'Kheloo- Promotion',
          description: ''
        }
      },
      {
        path: 'poker',
        component: PokerComponent,
        data: {
          title: 'Kheloo- Best Online Poker Games to Earn Real Money',
          description: 'Play Online Poker to win some exciting cash rewards and bonuses. Explore the variety of Poker games available on Kheloo.com. 24/7 customer support.'
        }
      },
      {
        path: 'casino',
        component: CasinoComponent,
        data: {
          title: 'Kheloo-Best Online Casino in India to earn real money',
          description: 'Kheloo offers the best online casino games like Teen Patti, Blackjack, Slots, Baccarat, Roulette, Poker, and more. Get a welcome bonus of ₹50,000.'
        }
      },
      {
        path: 'teenpatti',
        component: TeenpattiComponent,
        data: {
          title: 'Kheloo-Play Teen Patti Casino Game Online and Win Real Money',
          description: 'Play the Teen Patti Game at Kheloo.com and earn real money. Play with friends and people across the world. 24/7 customer support via different means.'
        }
      },
      {
        path: 'andar-bahar',
        component: AndarBaharComponent,
        data: {
          title: 'Kheloo- Andar Bahar Online game to win real money',
          description: 'Play a variety of Andar Bahar games like Super Andar Bahar, Live Andar Bahar, and One Touch Andar Bahar. Get exciting rewards and cash bonuses.'
        }
      },
      {
        path: 'slots',
        component: SlotsComponent,
        data: {
          title: 'Best Online Slot Games to Earn Real Money at Kheloo',
          description: 'Explore a huge range of slot games like 3 Reel Slots, 5 Reel Slots, 7&9 Reel Slots, and 3D Slots. Visit Kheloo.com now to learn more about slots.'
        }
      },
      {
        path: 'baccarat',
        component: BaccaratComponent,
        data: {
          title: 'Kheloo-Top Online Baccarat Games to win real money',
          description: 'Kheloo offers all top-rated Baccarat games where players can play with their friends and online players 24/7. Earn huge bonuses and other rewards.'
        }
      },
      {
        path: 'roulette',
        component: RouletteComponent,
        data: {
          title: 'Kheloo-Play Online Roulette and Win Real Money',
          description: 'Play some of the best Roulette games at Kheloo. European, French, 3D, and Live Roulette are some of the popular games. Join and start earning today!'
        }
      },
      {
        path: 'blackjack',
        component: BlackjackComponent,
        data: {
          title: 'Kheloo-Play Online Blackjack for Real Money in India',
          description: 'Explore Kheloo for the best online and live Blackjack games like single, multi-hand, and European Blackjack! Get big cash bonuses and rewards.'
        }
      },
      {
        path: 'table-game',
        component: TableGameComponent,
        data: {
          title: 'Kheloo- Top Online Casino Table Games in India',
          description: 'Choose from a huge range of online casino table games at Kheloo. Take advantage of the thrilling bonuses and offers. 24/7 customer support assistance.'
        }
      },
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
      }
    ]
  },
  // {
  //   path: 'signup',
  //   component: MSignupComponent,
  //   canActivate: []
  // },
  {
    path: 'signup',
    component: MSignupComponent,
    canActivate: []
  },
  {
    path: 'signupv1',
    component: MSignup1Component,
    canActivate: []
  },
  { path: 'SignUp', redirectTo: '/signup', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [LoginGuard, DesktopGuard],
    data: {
      title: 'Register- Kheloo',
      description: ''
    }
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    canActivate: [LoginGuard, DesktopGuard]
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
