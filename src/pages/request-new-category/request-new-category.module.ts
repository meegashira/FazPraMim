import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestNewCategoryPage } from './request-new-category';

@NgModule({
  declarations: [
    RequestNewCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestNewCategoryPage),
  ],
})
export class RequestNewCategoryPageModule {}
