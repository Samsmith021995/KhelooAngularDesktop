import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WithdrawlRoutingModule } from './withdrawl-routing.module';
import { WithdrawlComponent } from './withdrawl.component';
import { SharedModule } from '../../shared/shared.module';
import { WithdrawlInfoComponent } from './withdrawl-info/withdrawl-info.component';


@NgModule({
  declarations: [
    WithdrawlComponent,
    WithdrawlInfoComponent
  ],
  imports: [
    CommonModule,
    WithdrawlRoutingModule,
    SharedModule
  ]
})
export class WithdrawlModule { }
