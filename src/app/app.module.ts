import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './main/shared/shared.module';
import { MainComponent } from './main/main.component';
import { DesktopHeaderComponent } from './main/header/desktop-header/desktop-header.component';
import { MobileHeaderComponent } from './main/header/mobile-header/mobile-header.component';
import { MFooterComponent } from './main/footer/m-footer/m-footer.component';
import { DFooterComponent } from './main/footer/d-footer/d-footer.component';
import { SocialLinkComponent } from './main/desktop/footer-content/social-link/social-link.component';
import { AboutUsComponent } from './main/desktop/footer-content/general/about-us/about-us.component';
import { ContactUsComponent } from './main/desktop/footer-content/general/contact-us/contact-us.component';
import { FaqComponent } from './main/desktop/footer-content/general/faq/faq.component';
import { InviteFriendComponent } from './main/desktop/footer-content/general/invite-friend/invite-friend.component';
import { AffiliateComponent } from './main/desktop/footer-content/general/affiliate/affiliate.component';
import { ContactWithUsComponent } from './main/desktop/footer-content/contact-with-us/contact-with-us.component';
import { DisclaimerComponent } from './main/desktop/footer-content/security/disclaimer/disclaimer.component';
import { TermConditionComponent } from './main/desktop/footer-content/security/term-condition/term-condition.component';
import { CookiePolicyComponent } from './main/desktop/footer-content/security/cookie-policy/cookie-policy.component';
import { DisconnectionPolicyComponent } from './main/desktop/footer-content/security/disconnection-policy/disconnection-policy.component';
import { CasinoComponent } from './main/desktop/footer-content/games/casino/casino.component';
import { TeenpattiComponent } from './main/desktop/footer-content/games/teenpatti/teenpatti.component';
import { AndarBaharComponent } from './main/desktop/footer-content/games/andar-bahar/andar-bahar.component';
import { LoginComponent } from './main/desktop/auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GamePlatformComponent } from './main/desktop/game-platform/game-platform.component';
import { BottomNavbarComponent } from './main/footer/m-footer/bottom-navbar/bottom-navbar.component';
import { CricketBettingComponent } from './main/desktop/footer-content/sports/cricket-betting/cricket-betting.component';
import { FootballBettingComponent } from './main/desktop/footer-content/sports/football-betting/football-betting.component';
import { TennisBettingComponent } from './main/desktop/footer-content/sports/tennis-betting/tennis-betting.component';
import { IplBettingComponent } from './main/desktop/footer-content/sports/ipl-betting/ipl-betting.component';
import { OnlineSportsBettingComponent } from './main/desktop/footer-content/sports/online-sports-betting/online-sports-betting.component';
import { ApiService } from './main/service/api.service';
import { MMenuComponent } from './main/mobile/m-menu/m-menu.component';
import { UrlService } from './main/service/url.service';
import { KhelooPrivilegesComponent } from './main/desktop/footer-content/games/kheloo-privileges/kheloo-privileges.component';
import { TournamentsComponent } from './main/desktop/footer-content/games/tournaments/tournaments.component';
import { GameHeaderComponent } from './main/desktop/game-platform/game-header/game-header.component';
import { DesktopSidebarComponent } from './main/common-home/desktop-sidebar/desktop-sidebar.component';
import { PokerGameComponent } from './main/desktop/Games/poker-game/poker-game.component';
import { SlotsGameComponent } from './main/desktop/Games/slots-game/slots-game.component';
import { TeenpatiGameComponent } from './main/desktop/Games/teenpati-game/teenpati-game.component';
import { StoreModule } from '@ngrx/store';
import { AUTH_STATE_NAME } from './main/desktop/auth/state/auth.selector';
import { AuthReducer } from './main/desktop/auth/state/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './main/desktop/auth/state/auth.effects';
import { RouletteGameComponent } from './main/desktop/Games/roulette-game/roulette-game.component';
import { CasinoGameComponent } from './main/desktop/Games/casino-game/casino-game.component';
import { LotteryGameComponent } from './main/desktop/Games/lottery-game/lottery-game.component';
import { BlackjackGameComponent } from './main/desktop/Games/blackjack-game/blackjack-game.component';
import { BaccaratGameComponent } from './main/desktop/Games/baccarat-game/baccarat-game.component';
import { AndarbaharGameComponent } from './main/desktop/Games/andarbahar-game/andarbahar-game.component';
import { TablegamesGameComponent } from './main/desktop/Games/tablegames-game/tablegames-game.component';
import { SportsGameComponent } from './main/desktop/Games/sports-game/sports-game.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DesktopHeaderComponent,
    MobileHeaderComponent,
    MFooterComponent,
    DFooterComponent,
    SocialLinkComponent,
    AboutUsComponent,
    ContactUsComponent,
    FaqComponent,
    InviteFriendComponent,
    AffiliateComponent,
    ContactWithUsComponent,
    DisclaimerComponent,
    TermConditionComponent,
    CookiePolicyComponent,
    DisconnectionPolicyComponent,
    CasinoComponent,
    TeenpattiComponent,
    AndarBaharComponent,
    LoginComponent,
    GamePlatformComponent,
    BottomNavbarComponent,
    CricketBettingComponent,
    FootballBettingComponent,
    TennisBettingComponent,
    IplBettingComponent,
    OnlineSportsBettingComponent,
    MMenuComponent,
    KhelooPrivilegesComponent,
    TournamentsComponent,
    GameHeaderComponent,
    DesktopSidebarComponent,
    PokerGameComponent,
    SlotsGameComponent,
    TeenpatiGameComponent,
    RouletteGameComponent,
    CasinoGameComponent,
    LotteryGameComponent,
    BlackjackGameComponent,
    BaccaratGameComponent,
    AndarbaharGameComponent,
    TablegamesGameComponent,
    SportsGameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    StoreModule.forFeature(AUTH_STATE_NAME, AuthReducer),
    StoreModule.forRoot([]),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([AuthEffects])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ApiService, UrlService],

  bootstrap: [AppComponent]
})
export class AppModule { }
