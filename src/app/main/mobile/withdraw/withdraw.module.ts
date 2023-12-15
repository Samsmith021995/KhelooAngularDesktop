import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WithdrawRoutingModule } from './withdraw-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { WithdrawComponent } from './withdraw.component';


@NgModule({
  declarations: [
    WithdrawComponent
  ],
  imports: [
    CommonModule,
    WithdrawRoutingModule,
    SharedModule
  ]
})
export class WithdrawModule { }
