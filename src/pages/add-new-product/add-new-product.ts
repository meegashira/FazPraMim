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
  public createAnuncioForm: FormGroup;
  public loading: Loading;
  constructor(
    public navCtrl: NavController,
    public anuncioProvider:AnunciosProvider,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {
    this.createAnuncioForm = formBuilder.group({
      tipoAnuncio: ['', Validators.required],
      NomeAnuncio: ['', Validators.required],
      CategoriaAnuncio: ['', Validators.required],
      ValorAnuncio: ['', Validators.required],
      UnidadeAnuncio: ['', Validators.required],
      DescricaoAnuncio: ['',Validators.required]

    });
  }
  
  createAnuncio(): void{
    if (!this.createAnuncioForm.valid){
      console.log(this.createAnuncioForm.value);
    } else {
      this.anuncioProvider.createAnuncio(
        this.createAnuncioForm.value.tipoAnuncio,

        this.createAnuncioForm.value.NomeAnuncio,
        this.createAnuncioForm.value.CategoriaAnuncio,
        this.createAnuncioForm.value.ValorAnuncio,
        this.createAnuncioForm.value.UnidadeAnuncio,
        this.createAnuncioForm.value.DescricaoAnuncio);

      this.navCtrl.push('ProfileVendedorPage');
    }
  }

  goToConcluido(){
    this.navCtrl.push("AdicionarProdutoConcluidoPage");
  }
 }