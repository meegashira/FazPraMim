import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RequestNewCategoryDonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ name: 'RequestNewCategoryDonePage' })
@Component({
  selector: 'page-request-new-category-done',
  templateUrl: 'request-new-category-done.html',
})
export class RequestNewCategoryDonePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestNewCategoryDonePage');
  }

}
