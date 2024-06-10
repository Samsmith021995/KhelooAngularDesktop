import { NgModule ,CUSTOM_ELEMENTS_SCHEMA,LOCALE_ID} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LoaderComponent } from './loader/loader.component';
import { BannerComponent } from './banner/banner.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PokerComponent } from '../desktop/footer-content/games/poker/poker.component';
import { BaccaratComponent } from '../desktop/footer-content/games/baccarat/baccarat.component';
import { BlackjackComponent } from '../desktop/footer-content/games/blackjack/blackjack.component';
import { RouletteComponent } from '../desktop/footer-content/games/roulette/roulette.component';
import { SlotsComponent } from '../desktop/footer-content/games/slots/slots.component';
import { DJackpotComponent } from '../desktop/d-jackpot/d-jackpot.component';
import { DPromotionalComponent } from '../desktop/d-promotional/d-promotional.component';

import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { LangstripComponent } from '../mobile/langstrip/langstrip.component';
import { LangPopupComponent } from '../mobile/langstrip/lang-popup/lang-popup.component';
import { TableGameComponent } from '../desktop/footer-content/games/table-game/table-game.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { LoginpopupComponent } from '../mobile/loginpopup/loginpopup.component';
import { MSignupComponent } from '../mobile/m-signup/m-signup.component';
import { PopRegisterComponent } from '../mobile/pop-register/pop-register.component';
import { MForgotPasswordComponent } from '../mobile/m-forgot-password/m-forgot-password.component';
import { MPromotionComponent } from '../mobile/m-promotion/m-promotion.component';
import { PromotionPopupComponent } from '../mobile/m-promotion/promotion-popup/promotion-popup.component';
import {LayoutModule} from '@angular/cdk/layout';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { SecondHeaderComponent } from './second-header/second-header.component';


import { NzButtonModule } from 'ng-zorro-antd/button';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AccountBookFill, AlertFill, AlertOutline } from '@ant-design/icons-angular/icons';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NZ_I18N, en_US ,NZ_DATE_LOCALE} from 'ng-zorro-antd/i18n';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { enUS as dateFnsEnUS } from 'date-fns/locale';
import { UserOutline } from '@ant-design/icons-angular/icons';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { GamesCategoryComponent } from '../desktop/games-category/games-category.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { LoginPopupComponent } from '../desktop/auth/login-popup/login-popup.component';
import { ProfilePopupComponent } from '../desktop/profile-popup/profile-popup.component';
import { WithdrawPopComponent } from '../desktop/profile-popup/withdraw-pop/withdraw-pop.component';
import { StatementPopComponent } from '../desktop/profile-popup/statement-pop/statement-pop.component';

const icons: IconDefinition[] = [ AccountBookFill, AlertOutline, AlertFill,UserOutline ];
@NgModule({
  declarations: [
    BannerComponent,
    LoaderComponent,
    NotFoundComponent,
    PokerComponent,
    BaccaratComponent,
    BlackjackComponent,
    RouletteComponent,
    SlotsComponent,
    DJackpotComponent,
    DPromotionalComponent,
    LangstripComponent,
    LangPopupComponent,
    TableGameComponent,
    ThankYouComponent,
    LoginpopupComponent,
    MSignupComponent,
    PopRegisterComponent,
    MForgotPasswordComponent,
    MPromotionComponent,
    PromotionPopupComponent,
    SecondHeaderComponent,
    GamesCategoryComponent,
    LoginPopupComponent,
    ProfilePopupComponent,
    WithdrawPopComponent,
    StatementPopComponent
    
    
  ],
  imports: [
  CommonModule,
  FormsModule,
  HttpClientModule,
  ReactiveFormsModule,
  MatTableModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatIconModule,
  FormsModule,
  MatButtonModule,
  MatDatepickerModule,
  MatInputModule,
  MatNativeDateModule,
  MatTabsModule,
  MatDialogModule,
  MatRadioModule,
  MatSelectModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatDialogModule,
  FeatherModule.pick(allIcons),
  LayoutModule,
  MatMomentDateModule,
  NzButtonModule,
  NzIconModule.forRoot(icons),
  NzLayoutModule,
  NzTabsModule,
  NzImageModule,
  NzCardModule,
  NzFormModule,
  NzInputModule,
  NzDatePickerModule,
  NzGridModule,
  NzSkeletonModule,
  NzModalModule,
  NzSpinModule,
  NzDrawerModule,
  NzDropDownModule,
  NzAvatarModule

  ],
 exports:[
  PokerComponent,
  BaccaratComponent,
  BlackjackComponent,
  LoaderComponent,
  BannerComponent,
  RouletteComponent,
  NotFoundComponent,
  SlotsComponent,
  DJackpotComponent,
  DPromotionalComponent,
  LangstripComponent,
  LangPopupComponent,
  TableGameComponent,
  LoginpopupComponent,
  MSignupComponent,
  PopRegisterComponent,
  MForgotPasswordComponent,
  MPromotionComponent,
  PromotionPopupComponent,
  LoginPopupComponent,
  ProfilePopupComponent,
  WithdrawPopComponent,
  StatementPopComponent,
  CommonModule,
  FormsModule,
  HttpClientModule,
  ReactiveFormsModule,
  MatTableModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatIconModule,
  FormsModule,
  MatButtonModule,
  MatDatepickerModule,
  MatInputModule,
  MatNativeDateModule,
  MatTabsModule,
  MatDialogModule,
  MatRadioModule,
  MatSelectModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  FeatherModule,
  LayoutModule,
  MatMomentDateModule,
  NzButtonModule,
  NzIconModule,
  NzLayoutModule,
  NzTabsModule,
  NzImageModule,
  NzCardModule,
  NzFormModule,
  NzInputModule,
  NzDatePickerModule,
  NzGridModule,
  NzSkeletonModule,
  NzModalModule,
  NzSpinModule,
  NzDrawerModule,
  NzDropDownModule,
  NzAvatarModule
 ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] ,
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-US' },
    { provide: LOCALE_ID, useValue: 'en-US' },
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_DATE_LOCALE, useValue: dateFnsEnUS }
  ]
})
export class SharedModule { }
