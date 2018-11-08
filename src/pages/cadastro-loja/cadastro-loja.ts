import { Component } from '@angular/core';
import { IonicPage,
  NavController,
  Loading,
  LoadingController,
  AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreProvider } from '../../providers/store/store';
import { CadastroLojaConcluidoPage } from '../cadastro-loja-concluido/cadastro-loja-concluido';

@IonicPage( {name: 'CadastroLojaPage'} )
@Component({
  selector: 'page-cadastro-loja',
  templateUrl: 'cadastro-loja.html',
})
export class CadastroLojaPage {

  public createStoreForm: FormGroup;
  public loading: Loading;
  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public storeProvider: StoreProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {

    this.createStoreForm = formBuilder.group({
      name: ['', Validators.required],
      categoria: ['', Validators.required],
      descricao: ['', Validators.required]
    });
  }
    

  createStore(): void {
    if (!this.createStoreForm.valid){
      console.log(this.createStoreForm.value);
    } else {
      this.storeProvider.createStore(
        this.createStoreForm.value.name,
        this.createStoreForm.value.categoria,
        this.createStoreForm.value.descricao);
      this.navCtrl.push(CadastroLojaConcluidoPage);
    }
  }
}
