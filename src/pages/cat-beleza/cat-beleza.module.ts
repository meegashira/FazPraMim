import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatBelezaPage } from './cat-beleza';

@NgModule({
  declarations: [
    CatBelezaPage,
  ],
  imports: [
    IonicPageModule.forChild(CatBelezaPage),
  ],
})
export class CatBelezaPageModule {}
