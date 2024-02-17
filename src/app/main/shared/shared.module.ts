import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DHomeComponent } from '../common-home/d-home/d-home.component';
import { MHomeComponent } from '../common-home/m-home/m-home.component';
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
  LayoutModule
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
  LayoutModule
 ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class SharedModule { }
