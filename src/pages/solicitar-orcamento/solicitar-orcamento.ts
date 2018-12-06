import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AnunciosProvider } from '../../providers/anuncios/anuncios';

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
  public totalPedido += {{item?.price}};

  constructor(public navCtrl: NavController, public navParams: NavParams, public anuncioProvider: AnunciosProvider) {
  }

  goToSolicitacaoConcluida(){
    this.navCtrl.push("SolicitacaoConcluidaPage");
  }
}
