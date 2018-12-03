import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavParams, Nav, App, Platform, AlertController, MenuController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import { SideMenuContentComponent } from '../../shared/side-menu-content/side-menu-content.component';
import { SideMenuOption } from '../../shared/side-menu-content/models/side-menu-option';
import { SideMenuSettings } from '../../shared/side-menu-content/models/side-menu-settings';
import { GerenciadorFinancasPage } from '../gerenciador-financas/gerenciador-financas';
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

  @ViewChild(Nav) navCtrl: Nav

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
    {title: 'Inicio', pageName: 'ProfileVendedorPage', icon: 'home'},
    {title: 'Gerenciar Lojas', pageName: 'StoreListPage', icon: 'clipboard'},
    {title: 'Adicionar Anúncios', pageName: 'AddNewProductPage', icon: 'add'},
    {title: 'Chat', pageName: 'ChatListPage', icon: 'chatbubbles'},
    {title: 'Finanças', pageName:'GerenciadorFinancasPage', icon: 'stats'}
  ]

  constructor(/*public navCtrl: NavController,*/
    public navParams: NavParams,
    public authProvider: AuthProvider,
    public app: App,
    private menuCtrl: MenuController) {
      this.initializeApp();
}

  initializeApp() {
    // Initialize some options
    this.initializeOptions();
  }

  /*openPage(page: PageInterface){
    this.nav.setRoot(page.pageName);
  }*/

  private initializeOptions(): void {
		this.options = new Array<SideMenuOption>();

		// Load simple menu options
		// ------------------------------------------
		this.options.push({
			iconName: 'home',
			displayText: 'Inicio',
			component: 'ProfileVendedorPage',
		});

		this.options.push({
			iconName: 'person',
      displayText: 'Configurar Perfil',
      suboptions:[{ iconName: 'md-build',
                    displayText: 'Alterar Cadastro',
                    component: 'AlterarCadastroVendedorPage'},
                  { iconName: 'remove',
                    displayText: 'Excluir Perfil',
                    component: 'ProfileVendedorPage'}] //ALTERAAAA PARA A PAGINA CERTA
		});

		this.options.push({
			iconName: 'shirt',
			displayText: 'Lojas',
			suboptions:[{ iconName: 'add',
                    displayText: 'Cadastrar Loja',
                    component: 'CadastroLojaPage'},
                  { iconName: 'md-build',
                    displayText: 'Alterar Loja',
                    component: 'ProfileVendedorPage'}, //ALTERAAAA PARA A PAGINA CERTA
                  { iconName: 'remove',
                    displayText: 'Excluir Loja',
                    component: 'ProfileVendedorPage'}, //ALTERAAAA PARA A PAGINA CERTA
                  { iconName: 'add-circle',
                    displayText: 'Cadastrar Produto/Serviço',
                    component: 'AddNewProductPage'},
                  { iconName: 'ios-build',
                    displayText: 'Alterar Produto/Serviço',
                    component: 'AlterarProdutoServicoPage'},
                  { iconName: 'remove-circle',
                    displayText: 'Excluir Produto/Serviço',
                    component: 'ProfileVendedorPage'}] //ALTERAAAA PARA A PAGINA CERTA
    });

    this.options.push({
      iconName: 'chatbubbles',
			displayText: 'Chat',
			component: 'ChatListPage',
    });

    this.options.push({
      iconName:'stats',
      displayText: 'Finanças',
      component: 'GerenciadorFinancasPage'
    });


		/*this.options.push({
			iconName: 'bowtie',
			displayText: 'Static Badge',
			suboptions: [
				{
					iconName: 'basket',
					displayText: 'Sub Option 1',
					component: 'WithIconsSubOptionOnePage'
				}]
		});
		// Load options with nested items (with icons)
		this.options.push({
			displayText: 'With icons',
			suboptions: [
				{
					iconName: 'basket',
					displayText: 'Sub Option 1',
					component: 'WithIconsSubOptionOnePage'
				},
				{
					iconName: 'bookmark',
					displayText: 'Sub Option 2',
					component: 'WithIconsSubOptionTwoPage'
				},
				{
					iconName: 'bug',
					displayText: 'Dynamic Badge',
					component: 'DynamicBadgePage'
				}
			]
		});
		// Load options with nested items (without icons)
		this.options.push({
			displayText: 'Without icons',
			suboptions: [
				{
					displayText: 'Sub Option 1',
					component: 'WithoutIconsSubOptionOnePage'
				},
				{
					displayText: 'Sub Option 2',
					component: 'WithoutIconsSubOptionTwoPage'
				},
			]
		});*/

	}

	public onOptionSelected(option: SideMenuOption): void {
		  this.menuCtrl.close();
      this.navCtrl.setRoot(option.component);
	}

	public collapseMenuOptions(): void {
		this.sideMenu.collapseAllOptions();
	}

  isActive(page: PageInterface){
    if(this.navCtrl.getActive() && this.navCtrl.getActive().name === page.pageName)
      return 'secondary';
    else
      return 'FundoClaro';
  }

  logOut(): void {
    this.authProvider.logoutUser();
    this.navCtrl.setRoot(HomePage);
    //var nav = this.app.getRootNav();
    //nav.setRoot(HomePage);
  }
}
