import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginClientePage } from '../login-cliente/login-cliente';
import { SignupClientPage } from '../signup-client/signup-client';

@IonicPage({
  name: 'HomeClientePage'
})
@Component({
  selector: 'page-home-cliente',
  templateUrl: 'home-cliente.html',
})
export class HomeClientePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) { }

  goToLoginCliente(): void {
    this.navCtrl.push(LoginClientePage);
  }

  signUpClient(): void {
    this.navCtrl.push(SignupClientPage);
  }

}
