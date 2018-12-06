import { Component } from '@angular/core';
import { IonicPage,
  NavController,
  Loading,
  LoadingController,
  AlertController } from 'ionic-angular';


@IonicPage({
  name: 'PagamentosPage'
})
@Component({
  selector: 'page-pagamentos',
  templateUrl: 'pagamentos.html',
})
export class PagamentosPage {
  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {
  }
  
  GoToDinheiro(){
    this.navCtrl.push("DinheiroPage");
  }
  GoToCredito(){
    this.navCtrl.push("CreditPage");
  }
  GoToBoleto(){
    this.navCtrl.push("BoletoPage");
  }

}
