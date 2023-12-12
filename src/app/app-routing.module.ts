import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CommonServiceService } from './main/service/common-service.service';
import { LoginComponent } from './main/desktop/auth/login/login.component';
import { RegisterComponent } from './main/desktop/auth/register/register.component';
import { ForgotPasswordComponent } from './main/desktop/auth/forgot-password/forgot-password.component';
import { GamePlatformComponent } from './main/desktop/game-platform/game-platform.component';
const commonSer = new CommonServiceService();
// console.log(commonSer.isSmallScreen);
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./main/common-home/common-home.module').then(m => m.CommonHomeModule),
      },
      {
        path: 'change-password',
        loadChildren: () => import('./main/desktop/auth/change-password/change-password.module').then(m => m.ChangePasswordModule),
      },
      {
        path: 'setting',
        loadChildren: () => import('./main/desktop/setting/setting.module').then(m => m.SettingModule),
      },
      {
        path: 'statements',
        loadChildren: () => import('./main/desktop/statement/statement.module').then(m => m.StatementModule),
      },
      {
        path: 'withdraw',
        loadChildren: () => import('./main/desktop/withdrawl/withdrawl.module').then(m => m.WithdrawlModule),
      },
      {
        path: 'deposit',
        loadChildren: () => import('./main/desktop/deposit/deposit.module').then(m => m.DepositModule),
      },
      {
        path: 'promotion',
        loadChildren: () => import('./main/desktop/promotion/promotion.module').then(m => m.PromotionModule),
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'games/:id',
    component: GamePlatformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
