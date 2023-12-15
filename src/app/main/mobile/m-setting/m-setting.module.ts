import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MSettingRoutingModule } from './m-setting-routing.module';
import { MSettingComponent } from './m-setting.component';
import { MResetPasswordComponent } from './m-reset-password/m-reset-password.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    MSettingComponent,
    MResetPasswordComponent
  ],
  imports: [
    CommonModule,
    MSettingRoutingModule,
    SharedModule
  ]
})
export class MSettingModule { }
