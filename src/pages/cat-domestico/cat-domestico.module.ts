import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatDomesticoPage } from './cat-domestico';

@NgModule({
  declarations: [
    CatDomesticoPage,
  ],
  imports: [
    IonicPageModule.forChild(CatDomesticoPage),
  ],
})
export class CatDomesticoPageModule {}
