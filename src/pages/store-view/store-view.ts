import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StoreProvider } from '../../providers/store/store';
import { AnunciosProvider } from '../../providers/anuncios/anuncios';

@IonicPage({
  segment: "store-view/:storeId"
})

@Component({
  selector: 'page-store-view',
  templateUrl: 'store-view.html',
})
export class StoreViewPage {
  public currentStore: any = {};
  public anuncioList:Array<any> = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storeProvider: StoreProvider,
    public anuncioProvider: AnunciosProvider,
    ) { }

  ionViewDidLoad() {
    this.storeProvider
      .getStoreDetail(this.navParams.get("storeId"))
      .on("value", storeSnapshot => {
        this.currentStore = storeSnapshot.val();
        this.currentStore.id = storeSnapshot.key;
        this.currentStore.store;
        console.log(this.currentStore,this.currentStore.id);
      });
    this.anuncioProvider
      .getAnuncio()
      .orderByChild("store")
      .equalTo(this.currentStore.id)
      .on("value", anuncioSnapshot => {
        this.anuncioList = [];
        anuncioSnapshot.forEach(itemSnap => {
          this.anuncioList.push({
            uid: itemSnap.key,
            name: itemSnap.val().name,
            description: itemSnap.val().description,
            category: itemSnap.val().category,
            price: itemSnap.val().price,
            unidade: itemSnap.val().unidade,
            store: itemSnap.val().store,
            type: itemSnap.val().type,
          });
          return false;
        });
      });
  }

}
