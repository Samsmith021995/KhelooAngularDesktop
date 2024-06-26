import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonHomeRoutingModule } from './common-home-routing.module';
import { MHomeComponent } from './m-home/m-home.component';
import { SharedModule } from '../shared/shared.module';
import { CommonHomeComponent } from './common-home.component';

import { JackpotComponent } from '../mobile/jackpot/jackpot.component';
import { PromotionVideoComponent } from '../mobile/promotion-video/promotion-video.component';
import { DesktopHomeComponent } from './desktop-home/desktop-home.component';




@NgModule({
  declarations: [
    CommonHomeComponent,
    MHomeComponent,
    JackpotComponent,
    PromotionVideoComponent,
    DesktopHomeComponent,
    // DesktopSidebarComponent
  ],
  imports: [
    CommonModule,
    CommonHomeRoutingModule,
    SharedModule
  ],
})
export class CommonHomeModule { }
