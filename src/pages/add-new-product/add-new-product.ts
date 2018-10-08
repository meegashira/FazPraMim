import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage(
  {
    name: 'AddNewProductPage'
  }
)

@Component({
  selector: 'page-add-new-product',
  templateUrl: 'add-new-product.html',
})
export class AddNewProductPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewProductPage');
  }

}
