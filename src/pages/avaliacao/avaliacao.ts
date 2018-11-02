import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading,
  LoadingController,
  AlertController } from 'ionic-angular';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AvaliacaoConcluidaPage } from '../avaliacao-concluida/avaliacao-concluida';
import { Events } from 'ionic-angular';
import { StarRating } from 'ionic3-star-rating';

/**
 * Generated class for the AvaliacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'AvaliacaoPage'
})
@Component({
  selector: 'page-avaliacao',
  templateUrl: 'avaliacao.html',
})
export class AvaliacaoPage {
  rating: number = 4;
  public avaliacaoForm: FormGroup;
  storeProvider: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
         events.subscribe('star-rating:changed', (starRating) => {
          console.log(starRating);
          this.rating = starRating;
          });
    }
    med: number = (this.rating + this.storeProvider.getAvaliacao())/2;
  avaliarGoToThaksPage(): void {
      this.storeProvider.updateAvaliacao(this.rating);
        this.navCtrl.push(AvaliacaoConcluidaPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvaliacaoPage');
  }



}
