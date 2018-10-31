import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlterarCadastroClientePage } from './alterar-cadastro-cliente';

@NgModule({
  declarations: [
    AlterarCadastroClientePage,
  ],
  imports: [
    IonicPageModule.forChild(AlterarCadastroClientePage),
  ],
})
export class AlterarCadastroClientePageModule {}
