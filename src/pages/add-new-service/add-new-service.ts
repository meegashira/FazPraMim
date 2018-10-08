import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import firebase from 'firebase';
import { FirestoreService } from 'firebase/firestore';

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

  public createNewServiceForm: FormGroup;
  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public firestoreService: FirestoreService,
    formBuilder: FormBuilder
  ) {
    this.createNewServiceForm = formBuilder.group({
      name: ['', Validators.required],
      valueHour: ['', Validators.required],
      valueVisit: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  async addNewService() {
    const loading = await this.loadingCtrl.create();

    const name = this.createNewServiceForm.value.name;
    const valueHour = this.createNewServiceForm.value.valueHour;
    const valueVisit = this.createNewServiceForm.value.valueVisit;
    const description = this.createNewServiceForm.value.description;
    const category = this.createNewServiceForm.value.category;
    firebase
    .database()
    .ref(`/service/`)
    .push()
    .set({name,valueHour,valueVisit,description,category});
    /*this.firestoreService
    .createNewService(name,valueHour,valueVisit,description,category)
    .then(
      () => {
        loading.dismiss().then(() => {
          this.navCtrl.pop();
          //this.router.navigateByUrl('');
        });
      },
      error => {
        console.error(error);
      }
    );
    */
    return await loading.present();
  }

}
