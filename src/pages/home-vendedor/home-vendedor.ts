import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupFreelancerPage } from '../signup-freelancer/signup-freelancer';
import { LoginVendedorPage } from '../login-vendedor/login-vendedor';

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
    this.navCtrl.push(LoginVendedorPage);
  }

  goToSignUpFreelancer(): void {
    this.navCtrl.push(SignupFreelancerPage);
  }
}
