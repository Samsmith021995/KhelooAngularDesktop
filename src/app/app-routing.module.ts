import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CommonServiceService } from './main/service/common-service.service';
import { LoginComponent } from './main/desktop/auth/login/login.component';
import { RegisterComponent } from './main/desktop/auth/register/register.component';
import { ForgotPasswordComponent } from './main/desktop/auth/forgot-password/forgot-password.component';
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
        {
          path:'change-password',
          loadChildren:()=>import('./main/desktop/auth/change-password/change-password.module').then(m=>m.ChangePasswordModule),
               
           },
    ]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'forgot-password',
    component:ForgotPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
