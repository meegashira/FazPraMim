import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdicionarProdutoConcluidoPage } from './adicionar-produto-concluido';

@NgModule({
  declarations: [
    AdicionarProdutoConcluidoPage,
  ],
  imports: [
    IonicPageModule.forChild(AdicionarProdutoConcluidoPage),
  ],
})
export class AdicionarProdutoConcluidoPageModule {}
