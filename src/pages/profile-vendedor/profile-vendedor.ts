import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, Alert, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { ProfileProvider } from "../../providers/profile/profile";
import { HomePage } from '../../pages/home/home';
import { AvaliacaoPage } from '../avaliacao/avaliacao';
/*import { AdicionarAnuncioPage } from '../adicionar-anuncio/adicionar-anuncio';
import { CadastroLojaPage } from '../cadastro-loja/cadastro-loja';*/

@IonicPage( {name: 'ProfileVendedorPage'} ) 
@Component({
  selector: 'page-profile-vendedor',
  templateUrl: 'profile-vendedor.html',
})
export class ProfileVendedorPage {
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

  goToAnuncioPage(){
		this.navCtrl.push("AdicionarAnuncioPage"); 
  }
  
  goToCadastroLoja(){
		this.navCtrl.push("CadastroLojaPage"); 
  }
  
  goToAvaliacao(): void {
    this.navCtrl.push(AvaliacaoPage);
  }

  logOut(): void {
    this.authProvider.logoutUser();
    var nav = this.app.getRootNav();
    nav.setRoot(HomePage);
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

  ionViewDidLoad() {
    this.profileProvider.getUserProfile().on("value", userProfileSnapshot => {
      this.userProfile = userProfileSnapshot.val();
    });
  }
}
