import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeClientePage } from '../home-cliente/home-cliente';
import { HomeVendedorPage } from '../home-vendedor/home-vendedor';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
	constructor(public navCtrl: NavController) {}

	goToHomeCliente(){
		this.navCtrl.push(HomeClientePage); 
	}

  goToHomeVendedor(): void {
    this.navCtrl.push(HomeVendedorPage);
  }

}


