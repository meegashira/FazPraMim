import { Component } from '@angular/core';
import { IonicPage,
  NavController,
  Loading,
  LoadingController,
  AlertController } from 'ionic-angular';
import { HomeClientePage } from '../home-cliente/home-cliente';
import { HomeCatClientePage } from '../home-cat-cliente/home-cat-cliente';

@IonicPage({
  name: 'DinheiroPage'
})
@Component({
  selector: 'page-dinheiro',
  templateUrl: 'dinheiro.html',
})
export class DinheiroPage {
  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ){};
 
  Home(): void {
   
 
         this.navCtrl.push(HomeCatClientePage);
   }
 

}
