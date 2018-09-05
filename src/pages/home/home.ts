import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeClientePage } from '../home-cliente/home-cliente';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
	constructor(public navCtrl: NavController) {}

	proxPage(){
		this.navCtrl.push(HomeClientePage); 
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
<<<<<<< HEAD

  goToSignin(): void {
    this.navCtrl.push('LoginPage');
  }

=======
>>>>>>> master
}


