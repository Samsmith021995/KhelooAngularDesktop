import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatementRoutingModule } from './statement-routing.module';
import { StatementComponent } from './statement.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    StatementComponent
  ],
  imports: [
    CommonModule,
    StatementRoutingModule,
    SharedModule
  ]
})
export class StatementModule { }
