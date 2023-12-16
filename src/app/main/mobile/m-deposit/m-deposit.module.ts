import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDepositRoutingModule } from './m-deposit-routing.module';
import { MDepositComponent } from './m-deposit.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    MDepositComponent
  ],
  imports: [
    CommonModule,
    MDepositRoutingModule,
    SharedModule
  ]
})
export class MDepositModule { }
