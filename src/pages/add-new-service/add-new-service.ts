import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

/**
 * Generated class for the AddNewServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(
  {
    name: 'AddNewServicePage'

  }
)

@Component({
  selector: 'page-add-new-service',
  templateUrl: 'add-new-service.html',
})
export class AddNewServicePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  signupUser(name: string, surname: string, rg: string, cpf: string, email: string, password: string,address: string, complement:string, neighborhood:string, city:string, state:string, cep:number, userType: string): Promise<any> {
    return firebase
        .database()
        .ref('/product/'+'123')
        .set({ email: email , name: name, surname: surname, rg: rg, cpf: cpf, address: address, complement: complement, neighborhood: neighborhood, city: city, state: state, cep: cep});
      ;
  }

}
