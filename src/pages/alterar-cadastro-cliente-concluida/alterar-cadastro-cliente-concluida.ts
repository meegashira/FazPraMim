import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileClientePage } from "../profile-cliente/profile-cliente";
/**
 * Generated class for the AlterarCadastroClienteConcluidaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alterar-cadastro-cliente-concluida',
  templateUrl: 'alterar-cadastro-cliente-concluida.html',
})
export class AlterarCadastroClienteConcluidaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlterarCadastroClienteConcluidaPage');
  }

  goToProfileCliente(){
    this.navCtrl.push('ProfileClientePage');
  }

}
