import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileVendedorPage } from '../profile-vendedor/profile-vendedor';

/**
 * Generated class for the CadastroLojaConcluidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-loja-concluido',
  templateUrl: 'cadastro-loja-concluido.html',
})
export class CadastroLojaConcluidoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToVendedorProfile(){
    this.navCtrl.push(ProfileVendedorPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroLojaConcluidoPage');
  }

}
