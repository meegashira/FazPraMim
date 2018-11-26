import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SolicitacaoConcluidaPage } from '../solicitacao-concluida/solicitacao-concluida';

/**
 * Generated class for the SolicitarOrcamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-solicitar-orcamento',
  templateUrl: 'solicitar-orcamento.html',
})
export class SolicitarOrcamentoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToSolicitacaoConcluida(){
    this.navCtrl.push(SolicitacaoConcluidaPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SolicitarOrcamentoPage');
  }

}
