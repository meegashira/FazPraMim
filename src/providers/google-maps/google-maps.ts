import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase, { User } from 'firebase/app';
import 'firebase/database';
import { Geolocation } from '@ionic-native/geolocation';

declare var geolib:any;


/*
  Generated class for the GoogleMapsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class GoogleMapsProvider {
  private PATH = 'localizacao/';
  public LocalizacoSeller: User;
  public localizacao: firebase.database.Reference;
  public localRef: firebase.database.Reference = firebase.database().ref('/localizacao');

  constructor(private db: AngularFireDatabase) {
    firebase.auth().onAuthStateChanged( user => {
      if(user){
        this.LocalizacoSeller = user;
        this.localizacao = firebase.database().ref(`/localizacao`);
        }
    }); 
  }


}

/*
  createStore(name: string, categoria: string, descricao: string): firebase.database.ThenableReference {    
    return this.store.push({name: name, category: categoria, description: descricao , seller: this.StoreSeller.uid, storePhoto: 'https://firebasestorage.googleapis.com/v0/b/fazpramim-4bbe8.appspot.com/o/no-Storeimage.png?alt=media&token=820edc2e-a79f-4a8b-aef1-6e93f7aeeed6' })
  } 

  getStore(): firebase.database.Reference {
    return this.itemRef;
  }
}

*/






/*
  Generated class for the GoogleMapsProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

 