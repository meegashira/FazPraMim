import { Component } from '@angular/core';
import { IonicPage,
  NavController,
  Loading,
  LoadingController,
  AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreProvider } from '../../providers/store/store';

/**
 * Generated class for the CadastroLojaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage( {name: 'CadastroLojaPage'} )
@Component({
  selector: 'page-cadastro-loja',
  templateUrl: 'cadastro-loja.html',
})
export class CadastroLojaPage {

  public signupForm: FormGroup;
  public loading: Loading;
  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public storeProvider: StoreProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {

    this.signupForm = formBuilder.group({
      name: ['', Validators.required],
      categoria: ['', Validators.required],
      descricao: ['', Validators.required]
    });
  }
    

  signupStore(): void {
    if (!this.signupForm.valid){
      console.log(this.signupForm.value);
    } else {
      this.storeProvider.createStore(
        this.signupForm.value.name,
        this.signupForm.value.categoria,
        this.signupForm.value.descricao);

      this.navCtrl.push('CadastroLojaPage');
    }
  }



}
