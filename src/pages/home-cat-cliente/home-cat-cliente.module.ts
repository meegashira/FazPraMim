import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeCatClientePage } from './home-cat-cliente';

@NgModule({
  declarations: [
    HomeCatClientePage,
  ],
  imports: [
    IonicPageModule.forChild(HomeCatClientePage),
  ],
})
export class HomeCatClientePageModule {}
