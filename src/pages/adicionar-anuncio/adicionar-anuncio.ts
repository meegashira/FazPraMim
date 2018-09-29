import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdicionarAnuncioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adicionar-anuncio',
  templateUrl: 'adicionar-anuncio.html',
})
export class AdicionarAnuncioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionarAnuncioPage');
  }

  goToAddProduct(): void {
    this.navCtrl.push('AddNewProductPage');
  }

  goToAddService(): void {
    this.navCtrl.push('AddNewServicePage');
  }
}
