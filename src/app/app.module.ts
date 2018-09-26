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
import { HomeClientePage } from '../pages/home-cliente/home-cliente';
import { HomeVendedorPage } from '../pages/home-vendedor/home-vendedor';
import { LoginPage } from '../pages/login/login';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { SignupClientPage } from '../pages/signup-client/signup-client';
import { SignupFreelancerPage } from '../pages/signup-freelancer/signup-freelancer';
import { LoginClientePage } from '../pages/login-cliente/login-cliente';
//import { HomeCatClientePage } from '../pages/home-cat-cliente/home-cat-cliente';
//import { UserProfilePage } from '../pages/user-profile/user-profile';

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
    //HomeCatClientePage,
    //UserProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
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
    //HomeCatClientePage,
    //UserProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
  ]
})
export class AppModule {}
