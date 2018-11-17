import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'HomeCatClientePage'
})
@Component({
  selector: 'page-home-cat-cliente',
  templateUrl: 'home-cat-cliente.html',
})
export class HomeCatClientePage {
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) { }

  goToSearchPage(storeCategory: string):void {
  	this.navCtrl.push('SearchResultPage', {storeCategory: storeCategory})
  }

  goToMAP():void
  {
    this.navCtrl.push('MapsPage')

  }
  
}
