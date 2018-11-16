import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StoreProvider } from '../../providers/store/store';

/**
 * Generated class for the StoreViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: "store-view/:storeId"
})

@Component({
  selector: 'page-store-view',
  templateUrl: 'store-view.html',
})
export class StoreViewPage {
  public currentStore: any = {};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storeProvider: StoreProvider) {
  }

  ionViewDidLoad() {
    this.storeProvider
      .getStoreDetail(this.navParams.get("storeId"))
      .on("value", storeSnapshot => {
        this.currentStore = storeSnapshot.val();
        this.currentStore.id = storeSnapshot.key;
        console.log(this.currentStore,this.currentStore.id);
      });
  }

}
