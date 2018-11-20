import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, Alert, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { ProfileProvider } from "../../providers/profile/profile";
import {AlterarCadastroVendedorConcluidaPage} from '../alterar-cadastro-vendedor-concluida/alterar-cadastro-vendedor-concluida';
import {ProfileVendedorPage} from '../profile-vendedor/profile-vendedor';
/**
 * Generated class for the AlterarCadastroVendedorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alterar-cadastro-vendedor',
  templateUrl: 'alterar-cadastro-vendedor.html',
})
export class AlterarCadastroVendedorPage {

  public userProfile: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authProvider: AuthProvider,
    public app: App,
    public profileProvider: ProfileProvider,
    public alertCtrl: AlertController,
    ) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AlterarCadastroVendedorPage');
  }

  GoToAlteracaoConcluida(){
    this.navCtrl.push('AlterarCadastroVendedorConcluidaPage');
  }

  GoToProfileVendedor(){
    this.navCtrl.push('ProfileVendedorPage');
  }
  
  updateEmail(): void {
    let alert: Alert = this.alertCtrl.create({
      inputs: [{ name: 'newEmail', placeholder: 'Seu novo email' },
      { name: 'password', placeholder: 'Sua senha', type: 'password' }],
      buttons: [
        { text: 'Cancelar' },
        { text: 'Salvar',
          handler: data => {
            this.profileProvider
              .updateEmail(data.newEmail, data.password)
              .then(() => { console.log('Email foi mudado com sucesso!'); })
              .catch(error => { console.log('ERROR: ' + error.message); });
        }}]
    });
    alert.present();
  }
  
  updatePassword(): void {
    let alert: Alert = this.alertCtrl.create({
      inputs: [
        { name: 'newPassword', placeholder: 'Nova senha', type: 'password' },
        { name: 'oldPassword', placeholder: 'Senha antiga', type: 'password' }],
      buttons: [
        { text: 'Cancelar' },
        { text: 'Salvar',
          handler: data => {
            this.profileProvider.updatePassword(
              data.newPassword,
              data.oldPassword
            );
          }
        }
      ]
    });
    alert.present();
  }

  updateName(): void {
    const alert: Alert = this.alertCtrl.create({
      message: "Seu nome e sobrenome",
      inputs: [
        {
          name: "name",
          placeholder: "Seu nome",
          value: this.userProfile.name
        },
        {
          name: "surname",
          placeholder: "Seu sobrenome",
          value: this.userProfile.surname
        }
      ],
      buttons: [
        { text: "Cancelar" },
        {
          text: "Salvar",
          handler: data => {
            this.profileProvider.updateName(data.name, data.surname);
          }
        }
      ]
    });
    alert.present();
  }
}
