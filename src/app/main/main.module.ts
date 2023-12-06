import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { DesktopMainComponent } from './desktop/desktop-main/desktop-main.component';
import { MobileMainComponent } from './mobile/mobile-main/mobile-main.component';
import { SharedModule } from './shared/shared.module';
import { MainComponent } from './main.component';


@NgModule({
  declarations: [
    // MainComponent,
    // DesktopMainComponent,
    // MobileMainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
