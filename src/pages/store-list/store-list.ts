import { Component } from '@angular/core';
import { IonicPage,
  NavController,
  Loading,
  LoadingController,
  AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreProvider } from '../../providers/store/store';

@IonicPage({
  name: 'StoreListPage'
})
@Component({
  selector: 'page-store-list',
  templateUrl: 'store-list.html',
})
export class StoreListPage {

  constructor(public navCtrl: NavController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoreListPage');
  }

}
