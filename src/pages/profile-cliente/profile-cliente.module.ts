import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileClientePage } from './profile-cliente';

@NgModule({
  declarations: [
    ProfileClientePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileClientePage),
  ],
})
export class ProfileClientePageModule {}
