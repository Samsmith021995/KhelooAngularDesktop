import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CommonServiceService } from './main/service/common-service.service';
import { LoginComponent } from './main/desktop/auth/login/login.component';
const commonSer = new CommonServiceService();
// console.log(commonSer.isSmallScreen);
const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    children:[
      {
       path:'',
       loadChildren:()=>import('./main/common-home/common-home.module').then(m=>m.CommonHomeModule),
            
        },
      
    ]
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
