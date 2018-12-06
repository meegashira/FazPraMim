import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, Alert, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../../pages/home/home';
import { ProfileProvider } from "../../providers/profile/profile";
import { ProfileClientePage } from "../profile-cliente/profile-cliente";
import {AlterarCadastroClienteConcluidaPage} from "../alterar-cadastro-cliente-concluida/alterar-cadastro-cliente-concluida";
/**
 * Generated class for the AlterarCadastroClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alterar-cadastro-cliente',
  templateUrl: 'alterar-cadastro-cliente.html',
})
export class AlterarCadastroClientePage {
  public userProfile: any;
  public birthDate: string;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public authProvider: AuthProvider,
              public app: App,
              public profileProvider: ProfileProvider,
              public alertCtrl: AlertController,) {
  }

  logOut(): void {
    this.authProvider.logoutUser();
    var nav = this.app.getRootNav();
    nav.setRoot(HomePage);
  }

  goToProfileCliente(){
    this.navCtrl.push('ProfileClientePage');
  }

  GoToAlteracaoConcluida(){
    this.navCtrl.push('AlterarCadastroClienteConcluidaPage');
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

  updateRG(): void {
    const alert: Alert = this.alertCtrl.create({
      message: "Seu RG",
      inputs: [ { name: "rg", placeholder: "Seu RG", value: this.userProfile.rg } ],
      buttons: [ 
        { text: "Cancelar" },
        {
          text: "Salvar",
          handler: data => {
            this.profileProvider.updateRG(data.rg);
          }
        }
      ]
    });
    alert.present();
  }

  updateCPF(): void {
    const alert: Alert = this.alertCtrl.create({
      message: "Seu CPF",
      inputs: [ { name: "cpf", placeholder: "Seu CPF", value: this.userProfile.cpf } ],
      buttons: [ 
        { text: "Cancelar" },
        {
          text: "Salvar",
          handler: data => {
            this.profileProvider.updateCPF(data.cpf);
          }
        }
      ]
    });
    alert.present();
  }

  updateAddress(): void {
    const alert: Alert = this.alertCtrl.create({
      message: "CEP",
      inputs: [
        {
          name: "CEP",
          placeholder: "CEP",
          value: this.userProfile.cep
        },
        {
          name: "state",
          placeholder: "Estado",
          value: this.userProfile.state
        },
        {
          name: "city",
          placeholder: "Cidade",
          value: this.userProfile.city
        },
        {
          name: "neighborhood",
          placeholder: "Bairro",
          value: this.userProfile.neighborhood
        },
        {
          name: "address",
          placeholder: "Endereço",
          value: this.userProfile.address
        },
        {
          name: "complement",
          placeholder: "Complemento",
          value: this.userProfile.complement
        }
      ],
      buttons: [
        { text: "Cancelar" },
        {
          text: "Salvar",
          handler: data => {
            this.profileProvider.updateAddress(data.cep, data.state, data.city, data.neighborhood, data.address, data.complement);
          }
        }
      ]
    });
    alert.present();
  }

  ionViewDidLoad() {
    this.profileProvider.getUserProfile().on("value", userProfileSnapshot => {
      this.userProfile = userProfileSnapshot.val();
    });
  }
 
  /*ionViewDidLoad() {
    this.profileProvider.getUserProfile().on("value", userProfileSnapshot => {
      this.userProfile = userProfileSnapshot.val();
      this.birthDate = userProfileSnapshot.val().birthDate;
    });
  }*/
}
