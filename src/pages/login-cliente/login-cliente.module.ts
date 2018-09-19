import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginClientePage } from './login-cliente';

@NgModule({
  declarations: [
    LoginClientePage,
  ],
  imports: [
    IonicPageModule.forChild(LoginClientePage),
  ],
})
export class LoginClientePageModule {}
