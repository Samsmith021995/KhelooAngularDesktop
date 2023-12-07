import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonHomeRoutingModule } from './common-home-routing.module';
import { DHomeComponent } from './d-home/d-home.component';
import { MHomeComponent } from './m-home/m-home.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DHomeComponent,
   MHomeComponent
  ],
  imports: [
    CommonModule,
    CommonHomeRoutingModule,
    SharedModule
  ],
  exports:[
    DHomeComponent,
   MHomeComponent 
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class CommonHomeModule { }
