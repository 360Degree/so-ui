import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { AgmCoreModule } from '@agm/core';

import { Geolocation } from '@ionic-native/geolocation';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { Diagnostic } from '@ionic-native/diagnostic';
import { ImagePicker } from '@ionic-native/image-picker';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { AttendancePage } from '../pages/attendance/attendance';
import { ExpensePage } from '../pages/expense/expense';

import { PipesModule } from '../pipes/pipes.module';

import { TimerService } from '../services/timer.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AttendancePage,
    ExpensePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{},{
      links:[
        { component: AttendancePage, name: 'attendance', segment: 'attendance' },
        { component: ExpensePage, name: 'expense', segment: 'expense' }
      ]
    }),
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBtE25u89FjClRLc3Xb5iDkntS8N1xFr5k'
    }),
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AttendancePage,
    ExpensePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Camera,
    File,
    FileOpener,
    Diagnostic,
    ImagePicker,
    TimerService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
