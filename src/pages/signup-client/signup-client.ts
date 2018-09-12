import { Component } from '@angular/core';
import { IonicPage,
  NavController,
  Loading,
  LoadingController,
  AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { EmailValidator } from '../../validators/email';

@IonicPage({
  name: 'SignupClientPage'
})
@Component({
  selector: 'page-signup-client',
  templateUrl: 'signup-client.html',
})
export class SignupClientPage {

  public signupForm: FormGroup;
  public loading: Loading;
  constructor(
    public navCtrl: NavController,
    public authProvider: AuthProvider,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {
    this.signupForm = formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      rg: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['',
        Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['',
        Validators.compose([Validators.minLength(6), Validators.required])],
        Endereco: ['', Validators.required],
        numeroCasa:['', Validators.required],
        complemento: ['', Validators.required],
        bairro: ['', Validators.required],
        cidade:['', Validators.required],
        uf: ['',Validators.required],
        cep: ['',Validators.required]
    });
  }

  signupUser(){
    if (!this.signupForm.valid){
      console.log(this.signupForm.value);
    } else {
      this.authProvider.signupUser(
        this.signupForm.value.name,
        this.signupForm.value.surname,
        this.signupForm.value.rg,
        this.signupForm.value.cpf,
        this.signupForm.value.email,
        this.signupForm.value.password,
        this.signupForm.value.Endereco,
        this.signupForm.value.numeroCasa, 
        this.signupForm.value.complemento,
        this.signupForm.value.bairro,
        this.signupForm.value.cidade,
        this.signupForm.value.uf,
        this.signupForm.value.cep,
        'Client'
      )
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
    }
  }

}
