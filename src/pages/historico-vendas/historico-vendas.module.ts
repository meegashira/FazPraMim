import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoricoVendasPage } from './historico-vendas';

@NgModule({
  declarations: [
    HistoricoVendasPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoricoVendasPage),
  ],
})
export class HistoricoVendasPageModule {}
