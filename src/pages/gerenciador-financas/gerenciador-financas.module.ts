import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GerenciadorFinancasPage } from './gerenciador-financas';

@NgModule({
  declarations: [
    GerenciadorFinancasPage,
  ],
  imports: [
    IonicPageModule.forChild(GerenciadorFinancasPage),
  ],
})
export class GerenciadorFinancasPageModule {}
