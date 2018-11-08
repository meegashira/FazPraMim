import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, App, Nav, MenuController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import { SideMenuContentComponent } from '../../shared/side-menu-content/side-menu-content.component';
import { SideMenuOption } from '../../shared/side-menu-content/models/side-menu-option';
import { SideMenuSettings } from '../../shared/side-menu-content/models/side-menu-settings';

export interface PageInterface{
  title: string;
  pageName: string;
  icon: string;
}

@IonicPage({
  name: 'SideMenuClientePage'
})
@Component({
  selector: 'page-side-menu-cliente',
  templateUrl: 'side-menu-cliente.html',
})
export class SideMenuClientePage {

  rootPage = 'HomeCatClientePage';

  @ViewChild(Nav) nav: Nav

  @ViewChild(SideMenuContentComponent) sideMenu: SideMenuContentComponent;

  // Options to show in the SideMenuContentComponent
  public options: Array<SideMenuOption>;

  // Settings for the SideMenuContentComponent
  public sideMenuSettings: SideMenuSettings = {
    accordionMode: true,
    showSelectedOption: true,
    selectedOptionClass: 'active-side-menu-option'
  };

  pages: PageInterface[] = [
    {title: 'Meu Perfil', pageName: 'ProfileClientePage', icon: 'home'},
    {title: 'Alterar Cadastro', pageName: 'AlterarCadastroClientePage', icon: 'clipboard'},
    {title: 'Historico de Compras', pageName: 'HistoricoComprasPage', icon: 'add'}
  ]

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public authProvider: AuthProvider,
    public app: App,
    public menuCtrl: MenuController) {
      this.initializeApp();
}

  initializeApp() {
    // Initialize some options
    this.initializeOptions();
  }

  openPage(page: PageInterface){
    this.nav.setRoot(page.pageName);
  }

  private initializeOptions(): void {
		this.options = new Array<SideMenuOption>();

		// Load simple menu options
		// ------------------------------------------
		this.options.push({
			iconName: 'home',
			displayText: 'Meu Perfil',
			component: 'ProfileClientePage',
		});

		this.options.push({
			iconName: 'calculator',
      displayText: 'Orçamentos',
      suboptions:[{ iconName: 'ios-create',
                    displayText: 'Pedidos',
                    component: 'AlterarCadastroVendedorPage'},
                  { iconName: 'checkmark-circle',
                    displayText: 'Aprovados',
                    component: 'HomeCatClientePage'}] //ALTERAAAA PARA A PAGINA CERTA
		});

		this.options.push({
			iconName: 'person',
			displayText: 'Configurar Perfil',
			suboptions:[{ iconName: 'build',
                    displayText: 'Alterar Perfil',
                    component: 'AlterarCadastroClientePage'},
                  { iconName: 'remove',
                    displayText: 'Excluir Perfil',
                    component: 'HomeCatClientePage'}] //ALTERAAAA PARA A PAGINA CERTA
    });
  }

	public onOptionSelected(option: SideMenuOption): void {
		this.menuCtrl.close()
      this.nav.setRoot(option.component);
	}

	public collapseMenuOptions(): void {
		this.sideMenu.collapseAllOptions();
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
