import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GerenciarLojasPage } from './gerenciar-lojas';

@NgModule({
  declarations: [
    GerenciarLojasPage,
  ],
  imports: [
    IonicPageModule.forChild(GerenciarLojasPage),
  ],
})
export class GerenciarLojasPageModule {}
