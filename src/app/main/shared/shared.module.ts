import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DHomeComponent } from '../common-home/d-home/d-home.component';
import { MHomeComponent } from '../common-home/m-home/m-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    // DHomeComponent,
    // MHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
 exports:[
  CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
 ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
