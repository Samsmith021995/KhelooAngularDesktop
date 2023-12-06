import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesktopMainComponent } from './desktop-main/desktop-main.component';

const routes: Routes = [
  {
    path:'',
    component:DesktopMainComponent,
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
export class DesktopRoutingModule { }
