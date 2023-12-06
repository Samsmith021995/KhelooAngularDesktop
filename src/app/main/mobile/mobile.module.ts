import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileRoutingModule } from './mobile-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MobileMainComponent } from './mobile-main/mobile-main.component';


@NgModule({
  declarations: [
    // MobileMainComponent
  ],
  imports: [
    CommonModule,
    MobileRoutingModule,
    SharedModule
  ]
})
export class MobileModule { }
