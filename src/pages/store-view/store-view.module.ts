import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoreViewPage } from './store-view';

@NgModule({
  declarations: [
    StoreViewPage,
  ],
  imports: [
    IonicPageModule.forChild(StoreViewPage),
  ],
})
export class StoreViewPageModule {}
