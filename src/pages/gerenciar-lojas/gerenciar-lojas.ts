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

  ionViewDidLoad() {
    let store_SellerID = this.userProfile.currentUser.providerId;
    
    if (store_SellerID != "all") {
      this.storeProvider
        .getStore()
        .orderByChild("name")
        .equalTo(store_SellerID)
        .on('value', itemSnapshot => {
          this.storeList = [];
          itemSnapshot.forEach(itemSnap => {
            this.storeList.push({
              uid: itemSnap.key,
              name: itemSnap.val().name,
              avaliacao: itemSnap.val().avaliacao,
              description: itemSnap.val().description,
              category: itemSnap.val().category,
              seller: itemSnap.val().seller,
              storePhoto: itemSnap.val().storePhoto
            });
            this.loadedStoreList = this.storeList;
            return false;
          });
        });
    }
    else {
      this.storeProvider
      .getStore()
      .on('value', itemSnapshot => {
        this.storeList = [];
        itemSnapshot.forEach(itemSnap => {
          this.storeList.push({
            uid: itemSnap.key,
            name: itemSnap.val().name,
            avaliacao: itemSnap.val().avaliacao,
            description: itemSnap.val().description,
            category: itemSnap.val().category,
            seller: itemSnap.val().seller,
            storePhoto: itemSnap.val().storePhoto
          });
          this.loadedStoreList = this.storeList;
          return false;
        });
      });
    }
  }
}


