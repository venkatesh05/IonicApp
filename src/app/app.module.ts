import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { OfferPage } from '../pages/offer/offer';
import { ActionsheetPage } from "../pages/actionsheet/actionsheet";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UsersPage } from '../pages/users/users';
import { UserPage } from '../pages/users/user/user';
import { OffersService } from '../services/offers';
import { CardsPage } from '../pages/cards/cards';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    OfferPage,
    ActionsheetPage,
    UsersPage,
    UserPage,
    CardsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    OfferPage,
    ActionsheetPage,
    UsersPage,
    UserPage,
    CardsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    OffersService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
