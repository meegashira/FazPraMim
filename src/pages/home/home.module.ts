import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { HomeClientePage } from './home-cliente';

@NgModule({
  declarations: [
    HomePage,
    HomeClientePage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  entryComponents: [
  	HomePage,
  	HomeClientePage
  ],
  providers: []
})
export class HomePageModule {}