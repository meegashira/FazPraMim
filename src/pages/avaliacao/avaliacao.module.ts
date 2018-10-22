import { NgModule } from '@angular/core';
import { StarRatingModule } from 'ionic3-star-rating';
import { IonicPageModule } from 'ionic-angular';
import { AvaliacaoPage } from './avaliacao';

@NgModule({
  declarations: [
    AvaliacaoPage,
  ],
  imports: [
    StarRatingModule,
    IonicPageModule.forChild(AvaliacaoPage),
  ],
})
export class AvaliacaoPageModule {}
