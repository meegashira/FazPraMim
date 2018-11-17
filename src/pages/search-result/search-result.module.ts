import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchResultPage } from './search-result';
import { SearchPipe } from '../../pipes/search/search';
import { SortPipe } from '../../pipes/sort/sort';

@NgModule({
  declarations: [
    SearchResultPage,
    SearchPipe,
    SortPipe
  ],
  imports: [
    IonicPageModule.forChild(SearchResultPage),
  ],
})
export class SearchResultPageModule {}
