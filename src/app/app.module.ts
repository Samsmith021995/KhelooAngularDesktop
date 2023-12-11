import { NgModule } from '@angular/core';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrivacyPolicyComponent } from './main/mobile/privacy-policy/privacy-policy.component';
import { ContactWithUsComponent } from './main/desktop/footer-content/contact-with-us/contact-with-us.component';
import { DisclaimerComponent } from './main/desktop/footer-content/security/disclaimer/disclaimer.component';
import { TermConditionComponent } from './main/desktop/footer-content/security/term-condition/term-condition.component';
import { CookiePolicyComponent } from './main/desktop/footer-content/security/cookie-policy/cookie-policy.component';
import { DisconnectionPolicyComponent } from './main/desktop/footer-content/security/disconnection-policy/disconnection-policy.component';
import { CasinoComponent } from './main/desktop/footer-content/games/casino/casino.component';
import { TeenpattiComponent } from './main/desktop/footer-content/games/teenpatti/teenpatti.component';
import { AndarBaharComponent } from './main/desktop/footer-content/games/andar-bahar/andar-bahar.component';
import { SlotsComponent } from './main/desktop/footer-content/games/slots/slots.component';
import { BaccaratComponent } from './main/desktop/footer-content/games/baccarat/baccarat.component';
import { RouletteComponent } from './main/desktop/footer-content/games/roulette/roulette.component';
import { BlackjackComponent } from './main/desktop/footer-content/games/blackjack/blackjack.component';
import { PokerComponent } from './main/desktop/footer-content/games/poker/poker.component';
import { RegisterComponent } from './main/desktop/auth/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './main/desktop/auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgotPasswordComponent } from './main/desktop/auth/forgot-password/forgot-password.component';
import { GamePlatformComponent } from './main/desktop/game-platform/game-platform.component';

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
    PrivacyPolicyComponent,
    ContactWithUsComponent,
    DisclaimerComponent,
    TermConditionComponent,
    CookiePolicyComponent,
    DisconnectionPolicyComponent,
    CasinoComponent,
    TeenpattiComponent,
    AndarBaharComponent,
    SlotsComponent,
    BaccaratComponent,
    RouletteComponent,
    BlackjackComponent,
    PokerComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    GamePlatformComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  
,  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
