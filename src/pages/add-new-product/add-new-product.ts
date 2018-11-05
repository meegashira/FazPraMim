import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Loading,LoadingController,AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnunciosProvider } from '../../providers/anuncios/anuncios';
@IonicPage(
  {
    name: 'AddNewProductPage'
  }
)

@Component({
  selector: 'page-add-new-product',
  templateUrl: 'add-new-product.html',
})

export class AddNewProductPage {
  public testeAnuncio: FormGroup;
  public loading: Loading;
  constructor(
    public navCtrl: NavController,
    public anuncioProvider:AnunciosProvider,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {
    this.testeAnuncio = formBuilder.group({
      tipoAnuncio: ['', Validators.required],
      NomeAnuncio: ['', Validators.required],
      CategoriaAnuncio: ['', Validators.required],
      ValorAnuncio: ['', Validators.required],
      UnidadeAnuncio: ['', Validators.required],
      DescricaoAnuncio: ['',Validators.required]

    });
  }
  
  signupAnuncio(): void{
    if (!this.testeAnuncio.valid){
      console.log(this.testeAnuncio.value);
    } else {
      this.anuncioProvider.createAnuncio(
        this.testeAnuncio.value.tipoAnuncio,

        this.testeAnuncio.value.NomeAnuncio,
        this.testeAnuncio.value.CategoriaAnuncio,
        this.testeAnuncio.value.ValorAnuncio,
        this.testeAnuncio.value.UnidadeAnuncio,
        this.testeAnuncio.value.DescricaoAnuncio);

      this.navCtrl.push('ProfileVendedorPage');
    }
  }
 }