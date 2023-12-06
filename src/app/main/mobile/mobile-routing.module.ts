import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileMainComponent } from './mobile-main/mobile-main.component';

const routes: Routes = [
  {
    path:'',
    component:MobileMainComponent,
    children:[
      {
        path:'',
        loadChildren: () => import('./home/home.module').then( m => m.HomeModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileRoutingModule { }
