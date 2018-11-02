import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList, AngularFireDatabaseProvider } from 'angularfire2/database';
import { EventProvider } from '../../providers/event/event';

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
  public eventList: Array<any>;

  constructor(
    public navCtrl: NavController,
    public eventProvider: EventProvider
  ) {}
  goToList(): void {
    this.navCtrl.push('EventListPage');
  }

  ionViewDidLoad() {
      this.eventProvider.getEventList().on("value", eventListSnapshot => {
        this.eventList = [];
        eventListSnapshot.forEach(snap => {
          this.eventList.push({
          category: snap.val().category,
          description: snap.val().description,
          name: snap.val().name,
          seller: snap.val().seller
        });
        return false;
      });
    });
  }

}
