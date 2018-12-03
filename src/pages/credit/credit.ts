import { Component } from '@angular/core';
import { IonicPage,
  NavController,
  Loading,
  LoadingController,
  AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreditCardsProvider } from '../../providers/creditcards/creditcards';
import { DataValidator } from '../../validators/data';
import { NumeroCartaoValidator } from '../../validators/numerocartao';
import { CVVValidator } from '../../validators/cvv';
import { EndCreditPage } from '../end-credit/end-credit';

@IonicPage({
  name: 'CreditPage'
})
@Component({
  selector: 'page-credit',
  templateUrl: 'credit.html',
})
export class CreditPage {
  public PaymentForm: FormGroup;
  public loading: Loading;
  constructor(
    public navCtrl: NavController,
     public CreditCards: CreditCardsProvider,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {
    this.PaymentForm = formBuilder.group({
      numero: ['', Validators.compose([Validators.required, NumeroCartaoValidator.isValid])],
      vencimento: ['', Validators.compose([Validators.required, DataValidator.isValid])],
      cvv: ['', Validators.compose([Validators.required, CVVValidator.isValid])],
      bandeira: ['', Validators.required],
    });
  }


  Payment(): void {
   if (!this.PaymentForm.valid){
      console.log(this.PaymentForm.value);
    } else {
      
      this.CreditCards.createPayment(
        this.PaymentForm.value.numero,
        this.PaymentForm.value.vencimento,
        this.PaymentForm.value.cvv,
        this.PaymentForm.value.bandeira);

        this.navCtrl.push(EndCreditPage);
    }
  }
 

}
