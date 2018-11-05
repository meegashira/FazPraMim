import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GoogleMapsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class GoogleMapsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello GoogleMapsProvider Provider');
  }

}


/*
  Generated class for the GoogleMapsProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

 