import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithdrawlComponent } from './withdrawl.component';

const routes: Routes = [
  {
    path:'',
    component:WithdrawlComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WithdrawlRoutingModule { }
