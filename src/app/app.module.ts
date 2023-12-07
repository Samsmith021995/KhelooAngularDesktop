import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './main/shared/shared.module';
import { MainComponent } from './main/main.component';
import { DesktopHeaderComponent } from './main/header/desktop-header/desktop-header.component';
import { MobileHeaderComponent } from './main/header/mobile-header/mobile-header.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DesktopHeaderComponent,
    MobileHeaderComponent,
   



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
