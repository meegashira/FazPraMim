import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomeCatClientePage } from '../home-cat-cliente/home-cat-cliente';
import { AuthProvider } from '../../providers/auth/auth';
import { ProfileProvider } from "../../providers/profile/profile";
import { HistoricoComprasPage } from '../historico-compras/historico-compras';
import { ImagePicker } from '@ionic-native/image-picker';
import { Crop } from '@ionic-native/crop';

/**
 * Generated class for the ProfileClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-cliente',
  templateUrl: 'profile-cliente.html',
})
export class ProfileClientePage {
  public userProfile: any;
  fileToUpload: any;
  imgPath: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public authProvider: AuthProvider, public profileProvider: ProfileProvider, public toastCtrl: ToastController,
              public imagePicker: ImagePicker, public cropService: Crop) {
  }

  goToCategorias(){
    this.navCtrl.push(HomeCatClientePage);
  }

  goToHistoricoCompras(){
    this.navCtrl.push(HistoricoComprasPage);
  }

  savePhoto() {
    this.userProfile.uploadPhoto({
      fileToUpload: this.fileToUpload
    });
    this.navCtrl.pop();
  }

  escolherFoto() {
    this.imagePicker.hasReadPermission()
      .then(hasPermission => {
        if (hasPermission) {
          this.pegarImagem();
        } else {
          this.solicitarPermissao();
        }
      }).catch(error => {
        console.error('Erro ao verificar permissão', error);
      });
  }

  solicitarPermissao() {
    this.imagePicker.requestReadPermission()
      .then(hasPermission => {
        if (hasPermission) {
          this.pegarImagem();
        } else {
          console.error('Permissão negada');
        }
      }).catch(error => {
        console.error('Erro ao solicitar permissão', error);
      });
  }

  pegarImagem() {
    this.imagePicker.getPictures({
      maximumImagesCount: 1, //Apenas uma imagem
      outputType: 1 //BASE 64
    })
      .then(results => {
        if (results.length > 0) {
          this.imgPath = 'data:image/png;base64,' + results[0];
          this.fileToUpload = results[0];
          this.savePhoto();
        } else {
          this.imgPath = '';
          this.fileToUpload = null;
        }
      })
      .catch(error => {
        console.error('Erro ao recuperar a imagem', error);
      });
  }
  

  ionViewDidLoad() {
    this.profileProvider.getUserProfile().on("value", userProfileSnapshot => {
      this.userProfile = userProfileSnapshot.val();
    });
  }
}
