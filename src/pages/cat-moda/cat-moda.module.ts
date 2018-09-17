import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatModaPage } from './cat-moda';

@NgModule({
  declarations: [
    CatModaPage,
  ],
  imports: [
    IonicPageModule.forChild(CatModaPage),
  ],
})
export class CatModaPageModule {}
