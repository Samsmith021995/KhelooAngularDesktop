import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { Statement } from '@angular/compiler';
import { StatementComponent } from './statement.component';

const routes: Routes = [
  {
    path:'',
    component:StatementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatementRoutingModule { }
