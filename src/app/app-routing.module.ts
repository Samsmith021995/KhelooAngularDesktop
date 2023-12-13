import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CommonServiceService } from './main/service/common-service.service';
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
const commonSer = new CommonServiceService();
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
        canActivate:[AuthGuard]
      },
      {
        path: 'setting',
        loadChildren: () => import('./main/desktop/setting/setting.module').then(m => m.SettingModule),
        canActivate:[AuthGuard]
      },
      {
        path: 'statements',
        loadChildren: () => import('./main/desktop/statement/statement.module').then(m => m.StatementModule),
        canActivate:[AuthGuard]
      },
      {
        path: 'withdraw',
        loadChildren: () => import('./main/desktop/withdrawl/withdrawl.module').then(m => m.WithdrawlModule),
        canActivate:[AuthGuard]
      },
      {
        path: 'deposit',
        loadChildren: () => import('./main/desktop/deposit/deposit.module').then(m => m.DepositModule),
        canActivate:[AuthGuard]
      },
      {
        path: 'promotion',
        loadChildren: () => import('./main/desktop/promotion/promotion.module').then(m => m.PromotionModule),
      },
      {
        path:'poker',
        component:PokerComponent
      },
      {
        path:'casino',
        component:CasinoComponent
      },
      {
        path:'teenpatti',
        component:TeenpattiComponent
      },
      {
        path:'andar-bahar',
        component:AndarBaharComponent
      },
      {
        path:'slots',
        component:SlotsComponent
      },
      {
        path:'baccarat',
        component:BaccaratComponent
      },
      {
        path:'roulette',
        component:RouletteComponent
      },
      {
        path:'blackjack',
        component:BlackjackComponent
      },
      {
        path:'about',
        component:AboutUsComponent
      },
      {
        path:'contact',
        component:ContactUsComponent
      },
      {
        path:'affiliates',
        component:AffiliateComponent
      },
      {
        path:'faq',
        component:FaqComponent
      },
      {
        path:'invite-friend',
        component:InviteFriendComponent
      },
      {
        path:'disclaimer',
        component:DisclaimerComponent
      },
      {
        path:'term-condition',
        component:TermConditionComponent
      },
      {
        path:'privacy-policy',
        component:PrivacyPolicyComponent
      },
      {
        path:'cookie-policy',
        component:CookiePolicyComponent
      },
      {
        path:'disconnection-policy',
        component:DisconnectionPolicyComponent
      },
      // {
      //   path: '**',
      //   loadChildren: () => import('./main/desktop/not-found-page/not-found-page.module').then(m => m.NotFoundPageModule),
      // },
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate:[LoginGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate:[LoginGuard]
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    canActivate:[LoginGuard]
  },
  {
    path: 'games/:id',
    component: GamePlatformComponent,
    canActivate:[AuthGuard]
  },
  {
    path: '**',
    component: NotFoundComponent,

  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
