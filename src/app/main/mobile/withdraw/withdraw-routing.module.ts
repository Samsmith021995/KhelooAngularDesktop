import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithdrawComponent } from './withdraw.component';
import { WithdrawinfoComponent } from '../withdrawinfo/withdrawinfo.component';

const routes: Routes = [
  {
    path: '',
    component:WithdrawComponent
  },
  {
    path:'withdraw-info',
    component:WithdrawinfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WithdrawRoutingModule { }
