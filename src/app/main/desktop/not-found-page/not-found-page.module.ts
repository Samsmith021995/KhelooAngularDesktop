import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundPageRoutingModule } from './not-found-page-routing.module';
import { NotFoundPageComponent } from './not-found-page.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    NotFoundPageRoutingModule,
    SharedModule
  ]
})
export class NotFoundPageModule {

  // Ashutosh
 }
