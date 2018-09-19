import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the HomePerfilVendedorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage
({
  name: 'PerfilVendedorPage'
})
@Component({
  selector: 'page-home-perfil-vendedor',
  templateUrl: 'home-perfil-vendedor.html',
})
export class HomePerfilVendedorPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authProvider: AuthProvider,
    public app: App,
  ){}

  goToAddProduct(): void {
    this.navCtrl.push('AddNewProductPage');
  }

  goToAddService(): void {
    this.navCtrl.push('AddNewServicePage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePerfilVendedorPage');
  }

}
