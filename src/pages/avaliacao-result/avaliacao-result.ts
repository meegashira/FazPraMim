import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, Alert, AlertController } from 'ionic-angular';
import { StoreProvider } from '../../providers/store/store';
import { StoreViewPage } from '../store-view/store-view';

/**
 * Generated class for the AvaliacaoResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-avaliacao-result',
  templateUrl: 'avaliacao-result.html',
})

export class AvaliacaoResultPage {
  public StoreTeste: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public app: App,
    public alertCtrl: AlertController,
    public ProviderStore: StoreProvider,
    ) {
  }
  public store: Array<any> = [];

  goToStorePage(){
    this.navCtrl.push(StoreViewPage);
  }

  ionViewDidLoad() {
    this.ProviderStore.getStore().on('value', itemSnapshot => {
      this.store = [];
      itemSnapshot.forEach( itemSnap => {
        //this.store.push(itemSnap.val());
         this.store.push({ 
          uid: itemSnap.key,
          name: itemSnap.val().name,
          price: itemSnap.val().price,
          description: itemSnap.val().description,
          storePhoto: itemSnap.val().storePhoto
        });
        return false;
      });
    });
  }
/*

this.ProviderStore.getStore() .subscribe(snapshots=>{
        snapshots.forEach(snapshot => {
          console.log(snapshot.key, snapshot.val());
        });
    })


    .subscribe(users=>{

this.af.database.list('/users', { preserveSnapshot: true})
    .subscribe(snapshots=>{
        snapshots.forEach(snapshot => {
          console.log(snapshot.key, snapshot.val());
        });
    })
*/


}
