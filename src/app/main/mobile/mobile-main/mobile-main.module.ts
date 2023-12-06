import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileMainRoutingModule } from './mobile-main-routing.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MobileMainRoutingModule,
    SharedModule
  ]
})
export class MobileMainModule { }
