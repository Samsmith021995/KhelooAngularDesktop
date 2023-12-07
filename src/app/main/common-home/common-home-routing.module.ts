import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonHomeComponent } from './common-home.component';

const routes: Routes = [
  {
    path:'',
    component:CommonHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonHomeRoutingModule { }
