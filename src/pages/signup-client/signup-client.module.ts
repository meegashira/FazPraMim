import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupClientPage } from './signup-client';

@NgModule({
  declarations: [
    SignupClientPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupClientPage),
  ],
})
export class SignupClientPageModule {}
