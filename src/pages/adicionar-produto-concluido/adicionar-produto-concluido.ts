import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdicionarProdutoConcluidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adicionar-produto-concluido',
  templateUrl: 'adicionar-produto-concluido.html',
})
export class AdicionarProdutoConcluidoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionarProdutoConcluidoPage');
  }

  goToVendedorProfile(){
    this.navCtrl.push("ProfileVendedorPage");
  }

}
