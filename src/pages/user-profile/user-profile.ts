import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { AlterarCadastroClientePage } from '../alterar-cadastro-cliente/alterar-cadastro-cliente';
import { HistoricoComprasPage } from '../historico-compras/historico-compras';

@IonicPage({
  name: 'UserProfilePage'
})
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})

export class UserProfilePage {
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {}

    goToAlterarCadastro(): void {
      this.navCtrl.push(AlterarCadastroClientePage);
    }

    goToHistoricoCompras(): void{
      this.navCtrl.push(HistoricoComprasPage);
    }
}
