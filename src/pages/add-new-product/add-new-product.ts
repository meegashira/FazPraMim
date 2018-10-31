import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Loading,LoadingController,AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreProvider } from '../../providers/store/store';

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
  public signupForm: FormGroup;
  public loading: Loading;
  constructor(
    public navCtrl: NavController,
    public storeProductProvider: StoreProvider,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {
    this.signupForm = formBuilder.group({
      nameServico: ['', Validators.required],
      valorServico: ['', Validators.required],
      tipoUnidadeServico: ['', Validators.required],
      descricaoServico: ['', Validators.required],
      CategoriaServico: ['', Validators.required]
    });
  }
 /*
                document.getElementById('address').value="...";
                document.getElementById('neighborhood').value="...";
                document.getElementById('city').value="...";
                document.getElementById('state').value="...";
                
*/

  signupProduto(){
    if (!this.signupForm.valid){
      console.log(this.signupForm.value);
    } else {
      this.storeProductProvider.signupProduct(
        this.signupForm.value.nameProduto,
        this.signupForm.value.valorProduto,
        this.signupForm.value.tipoUnidadeProduto,
        this.signupForm.value.descricaoProduto,
        this.signupForm.value.CategoriaProduto 
      )
      /*
      .then(() => {
        this.loading.dismiss().then( () => {
          this.navCtrl.setRoot('UserProfilePage');
          this.navCtrl.push('EndSignUpPage');
        });
      }, (error) => {
        this.loading.dismiss().then( () => {
          let alert = this.alertCtrl.create({
            message: error.message,
            buttons: [
              {
                text: "Ok",
                role: 'cancel'
              }
            ]
          });
          alert.present();
        });
      });
      this.loading = this.loadingCtrl.create();
      this.loading.present();
    }*/
  } 
}
}
