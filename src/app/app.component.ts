import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      firebase.initializeApp({
        apiKey: "AIzaSyA33azvrweCz6awhTe7zs2WbYlYPRnIDqo",
        authDomain: "fazpramim-4bbe8.firebaseapp.com",
        databaseURL: "https://fazpramim-4bbe8.firebaseio.com",
        projectId: "fazpramim-4bbe8",
        storageBucket: "fazpramim-4bbe8.appspot.com",
        messagingSenderId: "639256908870"
      });

      const unsubscribe = firebase.auth().onAuthStateChanged(user => {
        if (!user) {
          this.rootPage = HomePage;
          unsubscribe();
        } else {
          this.rootPage = 'UserProfilePage'; 
          unsubscribe();
        }
      });

    });
  }
}

