import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AterarCadastroClienteConcluidaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aterar-cadastro-cliente-concluida',
  templateUrl: 'aterar-cadastro-cliente-concluida.html',
})
export class AterarCadastroClienteConcluidaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AterarCadastroClienteConcluidaPage');
  }

}
