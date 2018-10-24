import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { StarRatingModule } from 'ionic3-star-rating';

import { HomeClientePage } from '../pages/home-cliente/home-cliente';
import { HomeVendedorPage } from '../pages/home-vendedor/home-vendedor';
import { LoginPage } from '../pages/login/login';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { SignupClientPage } from '../pages/signup-client/signup-client';
import { SignupFreelancerPage } from '../pages/signup-freelancer/signup-freelancer';
import { LoginClientePage } from '../pages/login-cliente/login-cliente';
import { ProfileProvider } from '../providers/profile/profile';
import { SideMenuVendedorPage } from '../pages/side-menu-vendedor/side-menu-vendedor';
import { AvaliacaoPage } from '../pages/avaliacao/avaliacao';
import { AvaliacaoConcluidaPage } from '../pages/avaliacao-concluida/avaliacao-concluida';

const firebaseConfig = { 
  apiKey: "AIzaSyA33azvrweCz6awhTe7zs2WbYlYPRnIDqo",
  authDomain: "fazpramim-4bbe8.firebaseapp.com",
  databaseURL: "https://fazpramim-4bbe8.firebaseio.com",
  projectId: "fazpramim-4bbe8",
  storageBucket: "fazpramim-4bbe8.appspot.com",
  messagingSenderId: "639256908870"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HomeClientePage,
    HomeVendedorPage,
    LoginPage,
    SignupClientPage,
    SignupFreelancerPage,
    ResetPasswordPage,
    LoginClientePage,
    SideMenuVendedorPage,
    AvaliacaoPage,
    AvaliacaoConcluidaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    StarRatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HomeClientePage,
    HomeVendedorPage,
    LoginPage,
    SignupClientPage,
    SignupFreelancerPage,
    ResetPasswordPage,
    LoginClientePage,
    SideMenuVendedorPage,
    AvaliacaoPage,
    AvaliacaoConcluidaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    File,
    Transfer,
    Camera,
    FilePath,
    ProfileProvider
  ]
})
export class AppModule {}
