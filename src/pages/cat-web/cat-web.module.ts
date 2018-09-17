import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatWebPage } from './cat-web';

@NgModule({
  declarations: [
    CatWebPage,
  ],
  imports: [
    IonicPageModule.forChild(CatWebPage),
  ],
})
export class CatWebPageModule {}
