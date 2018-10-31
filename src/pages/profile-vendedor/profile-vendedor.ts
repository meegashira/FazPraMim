import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, Alert, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { ProfileProvider } from "../../providers/profile/profile";
import { HomePage } from '../../pages/home/home';
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

  /*goToAnuncioPage(){
		this.navCtrl.push(AdicionarAnuncioPage); 
  }
  
  goToCadastroLoja(){
		this.navCtrl.push(CadastroLojaPage); 
	}

  logOut(): void {
    this.authProvider.logoutUser();
    var nav = this.app.getRootNav();
    nav.setRoot(HomePage);
  }*/

  logOut(): void {
    this.authProvider.logoutUser();
    var nav = this.app.getRootNav();
    nav.setRoot(HomePage);
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileVendedorPage');
  }
}
