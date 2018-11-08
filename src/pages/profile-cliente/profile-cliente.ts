import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeCatClientePage } from '../home-cat-cliente/home-cat-cliente';
import { AuthProvider } from '../../providers/auth/auth';
import { ProfileProvider } from "../../providers/profile/profile";
import { HistoricoComprasPage } from '../historico-compras/historico-compras';

/**
 * Generated class for the ProfileClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-cliente',
  templateUrl: 'profile-cliente.html',
})
export class ProfileClientePage {
  public userProfile: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public authProvider: AuthProvider,
    public profileProvider: ProfileProvider) {
  }

  goToCategorias(){
    this.navCtrl.push(HomeCatClientePage);
  }

  goToHistoricoCompras(){
    this.navCtrl.push(HistoricoComprasPage);
  }


  ionViewDidLoad() {
    this.profileProvider.getUserProfile().on("value", userProfileSnapshot => {
      this.userProfile = userProfileSnapshot.val();
    });
  }

}
