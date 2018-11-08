import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, Alert, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../../pages/home/home';
import { ProfileProvider } from "../../providers/profile/profile";
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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authProvider: AuthProvider,
    public app: App,
    public profileProvider: ProfileProvider,
    public alertCtrl: AlertController,
    ) {

  }
  logOut(): void {
        this.authProvider.logoutUser();
        var nav = this.app.getRootNav();
        nav.setRoot(HomePage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AlterarCadastroVendedorPage');
  }

}
