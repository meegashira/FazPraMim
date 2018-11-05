import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchResultPage } from '../search-result/search-result';

/**
 * Generated class for the HomeCatClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'HomeCatClientePage'
})
@Component({
  selector: 'page-home-cat-cliente',
  templateUrl: 'home-cat-cliente.html',
})
export class HomeCatClientePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeCatClientePage');
  }

  goToSearchPage():void {
  	this.navCtrl.push('SearchResultPage')
  }

  goToMAP():void
  {
    this.navCtrl.push('MapsPage')

  }
  
}
