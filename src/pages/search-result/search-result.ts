import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, Alert, AlertController } from 'ionic-angular';
import { StoreProvider } from '../../providers/store/store';
import { StoreViewPage } from '../store-view/store-view';
import { SearchPipe } from '../../pipes/search/search';
import { SortPipe } from '../../pipes/sort/sort';

@IonicPage({
  segment: "search-result/:storeCategory"
})
@Component({
  selector: 'page-search-result',
  templateUrl: 'search-result.html',
})

export class SearchResultPage {
  public storeList:Array<any> = [];
  public loadedStoreList:Array<any>;
  descending: boolean = false;
  order: number;
  public column: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
    public alertCtrl: AlertController,
    public storeProvider: StoreProvider,
  ) { this.column = 'name'; }

  filterStore(event: string): void {
    this.column = event;
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

  goToStorePage(storeId: string): void {
    this.navCtrl.push(StoreViewPage, { storeId: storeId });
  }

  getItems(searchbar) {
    this.initializeItems();
  
    var q = searchbar.srcElement.value;
    if (!q) {
      return;
    }
  
    this.storeList = this.storeList.filter((v) => {
      if(v.name && q) {
        if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
    console.log(q, this.storeList.length);
  }

  initializeItems(): void {
    this.storeList = this.loadedStoreList;
  }  

  ionViewDidLoad(): void {
    let storeCategory = this.navParams.get("storeCategory");
    if (storeCategory != "all") {
      this.storeProvider
        .getStore()
        .orderByChild("category")
        .equalTo(storeCategory)
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
