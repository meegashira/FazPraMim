import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileVendedorPage } from "../profile-vendedor/profile-vendedor";/**
 * Generated class for the AlterarProdutoServicoConcluidaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alterar-produto-servico-concluida',
  templateUrl: 'alterar-produto-servico-concluida.html',
})
export class AlterarProdutoServicoConcluidaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlterarProdutoServicoConcluidaPage');
  }
  goToProfileVendedor(){
    this.navCtrl.push('ProfileVendedorPage');
  }
}
