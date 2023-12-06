import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { DesktopMainComponent } from './desktop/desktop-main/desktop-main.component';
import { MobileMainComponent } from './mobile/mobile-main/mobile-main.component';


@NgModule({
  declarations: [
    // DesktopMainComponent,
    MobileMainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
