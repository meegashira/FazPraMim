import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeClientePage } from './home-cliente';

@NgModule({
  declarations: [
    HomeClientePage
  ],
  imports: [
    IonicPageModule.forChild(HomeClientePage),
  ],
  entryComponents: [
  	HomeClientePage
  ],
  providers: []
})
export class HomeClientePageModule {}
