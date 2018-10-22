import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, App, Nav } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the SideMenuClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface PageInterface{
  title: string;
  pageName: string;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-side-menu-cliente',
  templateUrl: 'side-menu-cliente.html',
})
export class SideMenuClientePage {

  rootPage = 'UserProfilePage';

  @ViewChild(Nav) nav: Nav

  pages: PageInterface[] = [
    {title: 'Inicio', pageName: 'UserProfilePage', icon: 'home'},
    {title: 'Alterar Cadastro', pageName: 'AlterarCadastroClientePage', icon: 'clipboard'},
    {title: 'Historico de Compras', pageName: 'HistoricoComprasPage', icon: 'add'} 
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams,public authProvider: AuthProvider,
    public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SideMenuClientePage');
  }

  openPage(page: PageInterface){
    this.nav.setRoot(page.pageName);
  }

  isActive(page: PageInterface){
    if(this.nav.getActive() && this.nav.getActive().name === page.pageName)
      return 'secondary';
    else
      return 'FundoClaro';
  }

  logOut(): void {
    this.authProvider.logoutUser();
    this.nav.setRoot(HomePage);
  }
}
