import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';

@IonicPage({
  name: 'HomeVendedorPage'
})
@Component({
  selector: 'page-home-vendedor',
  templateUrl: 'home-vendedor.html',
})
export class HomeVendedorPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) { }
  
  goToLogin(): void {
    this.navCtrl.push(LoginPage);
  }

  goToSignUpFreelancer(): void {
    this.navCtrl.push(SignupPage);
  }
}
