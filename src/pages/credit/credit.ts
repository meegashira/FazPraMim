import { Component } from '@angular/core';
import { IonicPage,
  NavController,
  Loading,
  LoadingController,
  AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { CreditCardsProvider } from '../../providers/creditcards/creditcards';
import { CpfValidator } from '../../validators/cpf';
import { EndCreditPage } from '../end-credit/end-credit';

@IonicPage({
  name: 'CreditPage'
})
@Component({
  selector: 'page-credit',
  templateUrl: 'credit.html',
})
export class CreditPage {
  public signupForm: FormGroup;
  public loading: Loading;
  constructor(
    public navCtrl: NavController,
  //  public creditCards: CreditCardsProvider,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {
    this.signupForm = formBuilder.group({
      numero: ['', Validators.required],
      vencimento: ['', Validators.required],
      cvv: ['', Validators.required],
      bandeira: ['', Validators.required],
    /*  email: ['',
        Validators.compose([Validators.required, EmailValidator.isValid])],*/
    });
  }


  Payment(): void {
   if (!this.signupForm.valid){
      console.log(this.signupForm.value);
    } else {
      /*
      this.creditCards.createPayment(
        this.signupForm.value.numero,
        this.signupForm.value.vencimento,
        this.signupForm.value.cvv,
        this.signupForm.value.bandeira);*/

        this.navCtrl.push(EndCreditPage);
    }
  }
 

}
