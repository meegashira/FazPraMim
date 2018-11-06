import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { StoreProvider } from '../../providers/store/store';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the SearchResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-search-result',
  templateUrl: 'search-result.html',
})
export class SearchResultPage {
  stores: Observable<any>;

  constructor(public navCtrl: NavController,private provider: StoreProvider) {
      this.stores = this.provider.getAll();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchResultPage');
  }

}
