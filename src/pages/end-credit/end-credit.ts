import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the EndCreditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'EndCreditPage'
})
@Component({
  selector: 'page-end-credit',
  templateUrl: 'end-credit.html',
})
export class EndCreditPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) { }

  goToHomePage(): void {
    this.navCtrl.push(HomePage);
  }

}
