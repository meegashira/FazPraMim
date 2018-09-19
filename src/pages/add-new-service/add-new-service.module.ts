import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNewServicePage } from './add-new-service';

@NgModule({
  declarations: [
    AddNewServicePage,
  ],
  imports: [
    IonicPageModule.forChild(AddNewServicePage),
  ],
})
export class AddNewServicePageModule {}
