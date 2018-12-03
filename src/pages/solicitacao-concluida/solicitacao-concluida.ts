import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileVendedorPage } from '../profile-vendedor/profile-vendedor';

/**
 * Generated class for the SolicitacaoConcluidaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-solicitacao-concluida',
  templateUrl: 'solicitacao-concluida.html',
})
export class SolicitacaoConcluidaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToProfileCliente(){
    this.navCtrl.push(ProfileVendedorPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SolicitacaoConcluidaPage');
  }

}
