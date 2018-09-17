import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatAutoPage } from './cat-auto';

@NgModule({
  declarations: [
    CatAutoPage,
  ],
  imports: [
    IonicPageModule.forChild(CatAutoPage),
  ],
})
export class CatAutoPageModule {}
