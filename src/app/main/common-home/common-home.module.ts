import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonHomeRoutingModule } from './common-home-routing.module';
import { DHomeComponent } from './d-home/d-home.component';
import { MHomeComponent } from './m-home/m-home.component';
import { SharedModule } from '../shared/shared.module';
import { CommonHomeComponent } from './common-home.component';
import { BannerComponent } from './m-home/banner/banner.component';
import { LangstripComponent } from '../mobile/langstrip/langstrip.component';
import { JackpotComponent } from '../mobile/jackpot/jackpot.component';
import { PromotionVideoComponent } from '../mobile/promotion-video/promotion-video.component';



@NgModule({
  declarations: [
    CommonHomeComponent,
    DHomeComponent,
   MHomeComponent,
   BannerComponent,
   LangstripComponent,
   JackpotComponent,
   PromotionVideoComponent,
  ],
  imports: [
    CommonModule,
    CommonHomeRoutingModule,
    SharedModule
  ],
})
export class CommonHomeModule { }
