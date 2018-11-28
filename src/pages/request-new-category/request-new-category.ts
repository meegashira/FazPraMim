import { Component } from '@angular/core';
import { IonicPage,
  NavController,
  Loading,
  LoadingController,
  AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import firebase, { User }  from 'firebase';

@IonicPage({ name: 'RequestNewCategoryPage' })
@Component({
  selector: 'page-request-new-category',
  templateUrl: 'request-new-category.html',
})
export class RequestNewCategoryPage {

  public requestNewCategoryForm: FormGroup;
  public loading: Loading;
  public sugestionRef = firebase.database().ref('addNewCategory/');
  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {

    this.requestNewCategoryForm = formBuilder.group({
      category: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  requestNewCategory(): void {
    if (!this.requestNewCategoryForm.valid){
      console.log(this.requestNewCategoryForm.value);
    } else {
      this.sugestionRef.push( {
        category: this.requestNewCategoryForm.value.category,
        description: this.requestNewCategoryForm.value.description,
        }
      );
    }
  }

  goToRequestNewCategoryDone(): void {
    this.navCtrl.push('RequestNewCategoryDonePage');
  }
}
