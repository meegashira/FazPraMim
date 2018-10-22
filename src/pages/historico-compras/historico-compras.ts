import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AvaliacaoPage } from '../avaliacao/avaliacao';

/**
 * Generated class for the HistoricoComprasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historico-compras',
  templateUrl: 'historico-compras.html',
})
export class HistoricoComprasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoricoComprasPage');
  }

  goToAvaliacaoPage(): void {
    this.navCtrl.push(AvaliacaoPage);
  }
}
