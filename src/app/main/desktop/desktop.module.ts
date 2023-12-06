import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesktopRoutingModule } from './desktop-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DesktopMainComponent } from './desktop-main/desktop-main.component';
import { HeaderComponent } from './desktop-main/header/header.component';
import { FooterComponent } from './desktop-main/footer/footer.component';


@NgModule({
  declarations: [
    // DesktopMainComponent
    // HeaderComponent,
    // FooterComponent
  ],
  imports: [
    CommonModule,
    DesktopRoutingModule,
    SharedModule
  ]
})
export class DesktopModule { }
