import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProfilePage } from '../user-profile/user-profile';

/**
 * Generated class for the AvaliacaoConcluidaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage( {name: 'AvaliacaoConcluidaPage'} )
@Component({
  selector: 'page-avaliacao-concluida',
  templateUrl: 'avaliacao-concluida.html',
})
export class AvaliacaoConcluidaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvaliacaoConcluidaPage');
  }

  goToUserProfile(): void{
    this.navCtrl.push(UserProfilePage);
  }
}
