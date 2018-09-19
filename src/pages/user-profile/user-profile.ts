import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'UserProfilePage'
})
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authProvider: AuthProvider,
    public app: App
  ) { }

  logOut(): void {
    this.authProvider.logoutUser();
    var nav = this.app.getRootNav();
    nav.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfilePage');
  }

}
