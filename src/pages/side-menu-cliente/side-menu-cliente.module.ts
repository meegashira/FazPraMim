import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SideMenuClientePage } from './side-menu-cliente';

@NgModule({
  declarations: [
    SideMenuClientePage,
  ],
  imports: [
    IonicPageModule.forChild(SideMenuClientePage),
  ],
})
export class SideMenuClientePageModule {}
