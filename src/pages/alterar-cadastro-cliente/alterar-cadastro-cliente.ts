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

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlterarCadastroClientePage');
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
      inputs: [{ name: 'newEmail', placeholder: 'Your new email' },
      { name: 'password', placeholder: 'Your password', type: 'password' }],
      buttons: [
        { text: 'Cancel' },
        { text: 'Save',
          handler: data => {
            this.profileProvider
              .updateEmail(data.newEmail, data.password)
              .then(() => { console.log('Email Changed Successfully'); })
              .catch(error => { console.log('ERROR: ' + error.message); });
        }}]
    });
    alert.present();
  }
  
  updatePassword(): void {
    let alert: Alert = this.alertCtrl.create({
      inputs: [
        { name: 'newPassword', placeholder: 'New password', type: 'password' },
        { name: 'oldPassword', placeholder: 'Old password', type: 'password' }],
      buttons: [
        { text: 'Cancel' },
        { text: 'Save',
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
      message: "Your first name & last name",
      inputs: [
        {
          name: "firstName",
          placeholder: "Your first name",
          value: this.userProfile.firstName
        },
        {
          name: "lastName",
          placeholder: "Your last name",
          value: this.userProfile.lastName
        }
      ],
      buttons: [
        { text: "Cancel" },
        {
          text: "Save",
          handler: data => {
            this.profileProvider.updateName(data.firstName, data.lastName);
          }
        }
      ]
    });
    alert.present();
  }


  
  
  /*ionViewDidLoad() {
    this.profileProvider.getUserProfile().on("value", userProfileSnapshot => {
      this.userProfile = userProfileSnapshot.val();
      this.birthDate = userProfileSnapshot.val().birthDate;
    });
  }*/
}
