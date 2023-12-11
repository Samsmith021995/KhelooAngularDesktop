import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WithdrawlRoutingModule } from './withdrawl-routing.module';
import { WithdrawlComponent } from './withdrawl.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    WithdrawlComponent
  ],
  imports: [
    CommonModule,
    WithdrawlRoutingModule,
    SharedModule
  ]
})
export class WithdrawlModule { }
