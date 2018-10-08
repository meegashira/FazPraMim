import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
/*import { AdicionarAnuncioPage } from '../adicionar-anuncio/adicionar-anuncio';
import { CadastroLojaPage } from '../cadastro-loja/cadastro-loja';*/

/**
 * Generated class for the ProfileVendedorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage( {name: 'ProfileVendedorPage'} ) 
@Component({
  selector: 'page-profile-vendedor',
  templateUrl: 'profile-vendedor.html',
})
export class ProfileVendedorPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public authProvider: AuthProvider,
              public app: App) {
  }

  /*goToAnuncioPage(){
		this.navCtrl.push(AdicionarAnuncioPage); 
  }
  
  goToCadastroLoja(){
		this.navCtrl.push(CadastroLojaPage); 
	}

  logOut(): void {
    this.authProvider.logoutUser();
    var nav = this.app.getRootNav();
    nav.setRoot(HomePage);
  }*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileVendedorPage');
  }
}
