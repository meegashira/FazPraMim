import { Component } from '@angular/core';
import { IonicPage,
  NavController,
  Loading,
  LoadingController,
  AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { CpfValidator } from '../../validators/cpf';
import { EmailValidator } from '../../validators/email';
import { CepValidator } from '../../validators/cep';
import { EndSignUpPage } from '../end-sign-up/end-sign-up';

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
      cpf: ['', Validators.compose([Validators.required, CpfValidator.isValid])],
      email: ['',
        Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['',
        Validators.compose([Validators.minLength(6), Validators.required])],
      address: ['', Validators.required],
      complement: ['', Validators.required],
      neighborhood: ['', Validators.required],
      city:['', Validators.required],
      state: ['',Validators.required],
      cep:  ['', Validators.compose([Validators.required, CepValidator.isValid])]
    });
  }
 /*
                document.getElementById('address').value="...";
                document.getElementById('neighborhood').value="...";
                document.getElementById('city').value="...";
                document.getElementById('state').value="...";
                
*/

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
        this.signupForm.value.address, 
        this.signupForm.value.complement,
        this.signupForm.value.neighborhood,
        this.signupForm.value.city,
        this.signupForm.value.state,
        this.signupForm.value.cep,
        'Client'
      )
      .then(() => {
        this.loading.dismiss().then( () => {
          this.navCtrl.setRoot('SideMenuClientePage');
          this.navCtrl.push(EndSignUpPage);
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
