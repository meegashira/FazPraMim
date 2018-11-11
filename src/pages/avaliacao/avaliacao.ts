import { Component } from '@angular/core';
import { IonicPage,
  NavController,
  Loading,
  LoadingController,
  AlertController,
  NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AvaliacaoConcluidaPage } from '../avaliacao-concluida/avaliacao-concluida';
import { ProfileProvider } from "../../providers/profile/profile";
import { AvaliacaoProvider } from "../../providers/avaliacoes/avaliacoes";
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
  med: number=0;
  public avaliacaoForm: FormGroup;
  public ProfileProvider: ProfileProvider;
  public AvaliacaoProvider: AvaliacaoProvider;
  public createStoreForm: FormGroup;
  public loading: Loading;

  constructor(public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public events: Events) {

      this.avaliacaoForm = formBuilder.group({
        descricao: ['', Validators.required]});

    events.subscribe('star-rating:changed', (starRating) => {
     console.log(starRating);
     this.rating = starRating;
     });
  }
  
  createAvaliacao(): void {
 /* na linha de baixo referencia da avaliacao this.storeProvider.getAvaliacao( ), 10)*/
    this.med = (this.rating + 3 ) /2;
    this.AvaliacaoProvider.createAvaliacao(this.rating);
     // this.AvaliacaoProvider.createAvaliacao('aqui vem a descrição que pode ser vazia',5, 'aqui vem o uid do vendedor que está sendo avaliado'); /*tem que pegar a descrição do forms*/
      this.ProfileProvider.updateAvaliacao(this.med); /*se salvar assim vai salvar na avaliação do perfil que esta logado*/
      
      this.navCtrl.push(AvaliacaoConcluidaPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvaliacaoPage');
  }



}
