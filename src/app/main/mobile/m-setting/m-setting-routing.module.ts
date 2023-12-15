import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MSettingComponent } from './m-setting.component';

const routes: Routes = [
  {
    path:'',
    component:MSettingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MSettingRoutingModule { }
