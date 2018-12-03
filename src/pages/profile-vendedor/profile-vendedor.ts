import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, Alert, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { ProfileProvider } from "../../providers/profile/profile";
import { HomePage } from '../../pages/home/home';
import { AvaliacaoPage } from '../avaliacao/avaliacao';

@IonicPage( {name: 'ProfileVendedorPage'} ) 
@Component({
  selector: 'page-profile-vendedor',
  templateUrl: 'profile-vendedor.html',
})
export class ProfileVendedorPage {
  public userProfile: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authProvider: AuthProvider,
    public app: App,
    public profileProvider: ProfileProvider,
    public alertCtrl: AlertController,
    ) {
  }
  

  goToAnuncioPage(){
		this.navCtrl.push("AdicionarAnuncioPage"); 
  }

  goToAvaliacao(){
		this.navCtrl.push("AvaliacaoPage"); 
  }
  
  goToCadastroLoja(){
		this.navCtrl.push("CadastroLojaPage"); 
	}

  logOut(): void {
    this.authProvider.logoutUser();
    var nav = this.app.getRootNav();
    nav.setRoot(HomePage);
  }

  ionViewDidLoad() {
    this.profileProvider.getUserProfile().on("value", userProfileSnapshot => {
      this.userProfile = userProfileSnapshot.val();
    });
  }
}
