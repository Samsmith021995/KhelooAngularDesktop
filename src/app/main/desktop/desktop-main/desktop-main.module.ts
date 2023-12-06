import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesktopMainRoutingModule } from './desktop-main-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    // HeaderComponent,
    // FooterComponent
  ],
  imports: [
    CommonModule,
    DesktopMainRoutingModule,
    SharedModule
  ]
})
export class DesktopMainModule { }
