import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
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
import { RegisterComponent } from './main/desktop/auth/register/register.component';
import { LoginComponent } from './main/desktop/auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgotPasswordComponent } from './main/desktop/auth/forgot-password/forgot-password.component';
import { GamePlatformComponent } from './main/desktop/game-platform/game-platform.component';
import { PopRegisterComponent } from './main/mobile/pop-register/pop-register.component';
import { BottomNavbarComponent } from './main/footer/m-footer/bottom-navbar/bottom-navbar.component';
// import { LoginpopupComponent } from './main/mobile/loginpopup/loginpopup.component';
import { CricketBettingComponent } from './main/desktop/footer-content/sports/cricket-betting/cricket-betting.component';
import { FootballBettingComponent } from './main/desktop/footer-content/sports/football-betting/football-betting.component';
import { TennisBettingComponent } from './main/desktop/footer-content/sports/tennis-betting/tennis-betting.component';
import { IplBettingComponent } from './main/desktop/footer-content/sports/ipl-betting/ipl-betting.component';
import { OnlineSportsBettingComponent } from './main/desktop/footer-content/sports/online-sports-betting/online-sports-betting.component';
// import { MForgotPasswordComponent } from './main/mobile/m-forgot-password/m-forgot-password.component';
import { ApiService } from './main/service/api.service';
import { MMenuComponent } from './main/mobile/m-menu/m-menu.component';
import { UrlService } from './main/service/url.service';
// import { PromotionPopupComponent } from './main/mobile/m-promotion/promotion-popup/promotion-popup.component';
// import { MPromotionComponent } from './main/mobile/m-promotion/m-promotion.component';
import { KhelooPrivilegesComponent } from './main/desktop/footer-content/games/kheloo-privileges/kheloo-privileges.component';
import { TournamentsComponent } from './main/desktop/footer-content/games/tournaments/tournaments.component';
import { GameHeaderComponent } from './main/desktop/game-platform/game-header/game-header.component';
import { DesktopSidebarComponent } from './main/common-home/desktop-sidebar/desktop-sidebar.component';
import { LoginPopupComponent } from './main/desktop/auth/login-popup/login-popup.component';

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
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    GamePlatformComponent,
    BottomNavbarComponent,
    CricketBettingComponent,
    FootballBettingComponent,
    TennisBettingComponent,
    IplBettingComponent,
    OnlineSportsBettingComponent,
    MMenuComponent,
    // PromotionPopupComponent,
    // MPromotionComponent,
    KhelooPrivilegesComponent,
    TournamentsComponent,
    GameHeaderComponent,  
    DesktopSidebarComponent, LoginPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
   ],
   schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [ApiService,UrlService],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
