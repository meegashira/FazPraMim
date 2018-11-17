import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SolicitarOrcamentoPage } from './solicitar-orcamento';

@NgModule({
  declarations: [
    SolicitarOrcamentoPage,
  ],
  imports: [
    IonicPageModule.forChild(SolicitarOrcamentoPage),
  ],
})
export class SolicitarOrcamentoPageModule {}
