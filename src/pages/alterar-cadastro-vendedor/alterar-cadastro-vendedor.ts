import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AlterarCadastroVendedorConcluidaPage} from '../alterar-cadastro-vendedor-concluida/alterar-cadastro-vendedor-concluida';
import {ProfileVendedorPage} from '../profile-vendedor/profile-vendedor';

/**
 * Generated class for the AlterarCadastroVendedorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alterar-cadastro-vendedor',
  templateUrl: 'alterar-cadastro-vendedor.html',
})
export class AlterarCadastroVendedorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlterarCadastroVendedorPage');
  }

  GoToAlteracaoConcluida(){
    this.navCtrl.push('AlterarCadastroVendedorConcluidaPage');
  }

  GoToProfileVendedor(){
    this.navCtrl.push('ProfileVendedorPage');
  }
  
}
