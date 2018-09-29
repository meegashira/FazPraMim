import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdicionarAnuncioPage } from './adicionar-anuncio';

@NgModule({
  declarations: [
    AdicionarAnuncioPage,
  ],
  imports: [
    IonicPageModule.forChild(AdicionarAnuncioPage),
  ],
})
export class AdicionarAnuncioPageModule {}
