import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the EndSignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'EndSignUpPage'
})
@Component({
  selector: 'page-end-sign-up',
  templateUrl: 'end-sign-up.html',
})
export class EndSignUpPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) { }

  goToHomePage(): void {
    this.navCtrl.push(HomePage);
  }

}
