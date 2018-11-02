import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';
import { HomePage } from '../pages/home/home';
import {UserProfilePage} from '../pages/user-profile/user-profile';
import { initializeApp } from 'firebase/app';
import { HomeCatClientePage } from '../pages/home-cat-cliente/home-cat-cliente';
import { findReadVarNames } from '@angular/compiler/src/output/output_ast';
import { FirebaseAppProvider } from 'angularfire2';
import { SideMenuVendedorPage } from '../pages/side-menu-vendedor/side-menu-vendedor';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  @ViewChild(Nav) nav: Nav;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen, 
    public menu: MenuController,
  ) {
    this.initializeApp();
    this.menu.enable(true,'menu');

    this.pages = [
      {title: 'Meu Perfil', component: UserProfilePage},
      {title: 'Categorias', component: HomeCatClientePage}
    ];  
  }

    openPage(page){
      this.nav.setRoot(page.component);
    }

    /*platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();*/

      initializeApp(){
        this.platform.ready().then(() =>{
          this.statusBar.styleDefault();
          this.splashScreen.hide();

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
          this.rootPage = SideMenuVendedorPage;          
          unsubscribe();
        }
      });

    });
  }
}

