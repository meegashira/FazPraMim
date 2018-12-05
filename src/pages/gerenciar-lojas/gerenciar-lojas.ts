import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { StoreProvider } from '../../providers/store/store';
import { ProfileProvider } from '../../providers/profile/profile';

/**
 * Generated class for the GerenciarLojasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gerenciar-lojas',
  templateUrl: 'gerenciar-lojas.html',
})
export class GerenciarLojasPage {
  public storeList:Array<any> = [];
  public loadedStoreList:Array<any>;
  public column: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,
              public storeProvider: StoreProvider, public userProfile: ProfileProvider) {
                this.column = 'name';
  }

  initializeItems(): void {
    this.storeList = this.loadedStoreList;
  }  

  goToAddProdutoPage(){
    this.navCtrl.push("AddNewProductPage");
  }
}


