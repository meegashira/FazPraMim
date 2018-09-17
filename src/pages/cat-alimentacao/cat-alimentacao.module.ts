import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatAlimentacaoPage } from './cat-alimentacao';

@NgModule({
  declarations: [
    CatAlimentacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(CatAlimentacaoPage),
  ],
})
export class CatAlimentacaoPageModule {}
