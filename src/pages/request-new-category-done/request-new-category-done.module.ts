import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestNewCategoryDonePage } from './request-new-category-done';

@NgModule({
  declarations: [
    RequestNewCategoryDonePage,
  ],
  imports: [
    IonicPageModule.forChild(RequestNewCategoryDonePage),
  ],
})
export class RequestNewCategoryDonePageModule {}
