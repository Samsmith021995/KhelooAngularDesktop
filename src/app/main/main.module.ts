import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { DesktopMainComponent } from './desktop/desktop-main/desktop-main.component';
import { MobileMainComponent } from './mobile/mobile-main/mobile-main.component';
import { SharedModule } from './shared/shared.module';
import { MainComponent } from './main.component';
import { HeaderComponent } from './desktop/desktop-main/header/header.component';
import { FooterComponent } from './desktop/desktop-main/footer/footer.component';
import { MFooterComponent } from './mobile/mobile-main/footer/footer.component';
import { MHeaderComponent } from './mobile/mobile-main/header/header.component';


@NgModule({
  declarations: [
    MainComponent,
    DesktopMainComponent,
    MobileMainComponent,
    HeaderComponent,
    FooterComponent,
    MFooterComponent,
    MHeaderComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule { }
