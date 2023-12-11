import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WithdrawlRoutingModule } from './withdrawl-routing.module';
import { WithdrawlComponent } from './withdrawl.component';


@NgModule({
  declarations: [
    WithdrawlComponent
  ],
  imports: [
    CommonModule,
    WithdrawlRoutingModule
  ]
})
export class WithdrawlModule { }
