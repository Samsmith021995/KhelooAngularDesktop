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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
