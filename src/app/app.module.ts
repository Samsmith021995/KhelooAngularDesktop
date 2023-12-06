import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './main/shared/shared.module';
import { MainComponent } from './main/main.component';
import { DesktopMainComponent } from './main/desktop/desktop-main/desktop-main.component';
import { MobileMainComponent } from './main/mobile/mobile-main/mobile-main.component';
import { FooterComponent } from './main/desktop/desktop-main/footer/footer.component';
import { HeaderComponent } from './main/desktop/desktop-main/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DesktopMainComponent,
    MobileMainComponent,
    FooterComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
