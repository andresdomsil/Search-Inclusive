import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListasPage } from '../pages/listas/listas';
import { LugarPage } from '../pages/lugar/lugar';
import { MapaPage } from '../pages/mapa/mapa';
import { HttpModule } from "@angular/http";
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListasPage,
    LugarPage,
    MapaPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListasPage,
    LugarPage,
    MapaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
