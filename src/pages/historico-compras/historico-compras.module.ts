import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoricoComprasPage } from './historico-compras';

@NgModule({
  declarations: [
    HistoricoComprasPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoricoComprasPage),
  ],
})
export class HistoricoComprasPageModule {}
