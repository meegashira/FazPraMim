import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ProfileVendedorPage} from '../profile-vendedor/profile-vendedor';
import{AlterarProdutoServicoConcluidaPage} from '../alterar-produto-servico-concluida/alterar-produto-servico-concluida';
/**
 * Generated class for the AlterarProdutoServicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alterar-produto-servico',
  templateUrl: 'alterar-produto-servico.html',
})
export class AlterarProdutoServicoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  GoToProdutoConcluida(){
    this.navCtrl.push('AlterarProdutoServicoConcluidaPage');
  }
  GoToProfileVendedor(){
    this.navCtrl.push('ProfileVendedorPage');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AlterarProdutoServicoPage');
  }
  updatePrice(): void {
    
  }

  updateMedida(): void{

  }

  updateDescription(): void{

    
  }
}
