import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithdrawlComponent } from './withdrawl.component';
import { WithdrawlInfoComponent } from './withdrawl-info/withdrawl-info.component';

const routes: Routes = [
  {
    path:'',
    component:WithdrawlComponent
  },
  {
    path:'withdraw-info',
    component:WithdrawlInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WithdrawlRoutingModule { }
