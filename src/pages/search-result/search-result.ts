import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, Alert, AlertController } from 'ionic-angular';
import { StoreProvider } from '../../providers/store/store';
import { StoreViewPage } from '../store-view/store-view';

@IonicPage()
@Component({
  selector: 'page-search-result',
  templateUrl: 'search-result.html',
})

export class SearchResultPage {
  public StoreTeste: any;
  public store: Array<any> = [];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public app: App,
    public alertCtrl: AlertController,
    public storeProvider: StoreProvider,
    ) { }

  filterStore(event: string): void {
    this.storeProvider.getStore().orderByChild(event).on('value', itemSnapshot => {
      this.store = [];
      itemSnapshot.forEach( itemSnap => {
         this.store.push({ 
          uid: itemSnap.key,
          name: itemSnap.val().name,
          avaliacao: itemSnap.val().avaliacao,
          description: itemSnap.val().description,
          category: itemSnap.val().category,
          seller: itemSnap.val().seller,
          storePhoto: itemSnap.val().storePhoto
        })
        return false;
      })
    });
  }

  goToStorePage(storeId: string): void {
    this.navCtrl.push(StoreViewPage, { storeId: storeId });
  }

  ionViewDidLoad(): void {
    this.storeProvider.getStore().on('value', itemSnapshot => {
      this.store = [];
      itemSnapshot.forEach( itemSnap => {
         this.store.push({ 
          uid: itemSnap.key,
          name: itemSnap.val().name,
          avaliacao: itemSnap.val().avaliacao,
          description: itemSnap.val().description,
          category: itemSnap.val().category,
          seller: itemSnap.val().seller,
          storePhoto: itemSnap.val().storePhoto
        });
        return false;
      });
    });
  }
}
