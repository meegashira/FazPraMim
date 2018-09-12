import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
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

  goToLogin(): void {
    this.navCtrl.push(LoginPage);
  }

  signUpClient(): void {
    this.navCtrl.push(SignupClientPage);
  }

}
