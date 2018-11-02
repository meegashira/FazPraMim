import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, App } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';

export interface PageInterface{
  title: string;
  pageName: string;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-side-menu-vendedor',
  templateUrl: 'side-menu-vendedor.html',
})
export class SideMenuVendedorPage {

  rootPage = 'ProfileVendedorPage';

  @ViewChild(Nav) nav: Nav

  pages: PageInterface[] = [
    {title: 'Inicio', pageName: 'ProfileVendedorPage', icon: 'home'},
    {title: 'Cadastrar Loja', pageName: 'CadastroLojaPage', icon: 'clipboard'},
    {title: 'Adicionar Anúncios', pageName: 'AddNewProductPage', icon: 'add'}    
  ]

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public authProvider: AuthProvider,
    public app: App) {
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
    /*var nav = this.app.getRootNav();
    nav.setRoot(HomePage);*/
  }
}
