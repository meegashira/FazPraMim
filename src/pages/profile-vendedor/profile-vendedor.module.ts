import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileVendedorPage } from './profile-vendedor';

@NgModule({
  declarations: [
    ProfileVendedorPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileVendedorPage),
  ],
})
export class ProfileVendedorPageModule {}
