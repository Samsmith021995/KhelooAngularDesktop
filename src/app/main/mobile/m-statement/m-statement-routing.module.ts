import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MStatementComponent } from './m-statement.component';

const routes: Routes = [
  {
    path:'',
    component:MStatementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MStatementRoutingModule { }
