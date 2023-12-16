import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MStatementRoutingModule } from './m-statement-routing.module';
import { MStatementComponent } from './m-statement.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    MStatementComponent
  ],
  imports: [
    CommonModule,
    MStatementRoutingModule,
    SharedModule
  ]
})
export class MStatementModule { }
