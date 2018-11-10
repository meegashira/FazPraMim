import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileVendedorPage } from "../profile-vendedor/profile-vendedor";
/**
 * Generated class for the AlterarCadastroVendedorConcluidaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alterar-cadastro-vendedor-concluida',
  templateUrl: 'alterar-cadastro-vendedor-concluida.html',
})
export class AlterarCadastroVendedorConcluidaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlterarCadastroVendedorConcluidaPage');
  }

  goToProfileVendedor(){
    this.navCtrl.push('ProfileVendedorPage');
  }
}
