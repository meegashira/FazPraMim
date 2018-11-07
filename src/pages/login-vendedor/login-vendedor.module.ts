import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginVendedorPage } from './login-vendedor';

@NgModule({
  declarations: [
    LoginVendedorPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginVendedorPage),
  ],
})
export class LoginVendedorPageModule {}
