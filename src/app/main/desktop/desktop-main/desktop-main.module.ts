import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesktopMainRoutingModule } from './desktop-main-routing.module';
import { DesktopMainComponent } from './desktop-main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
DesktopMainComponent,
HeaderComponent,
FooterComponent


  ],
  imports: [
    CommonModule,
    DesktopMainRoutingModule
  ]
})
export class DesktopMainModule { }
