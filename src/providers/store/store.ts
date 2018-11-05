import { Injectable } from '@angular/core';
import firebase, { User } from 'firebase/app';
import 'firebase/database';

/*
  Generated class for the StoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class StoreProvider {
  public StoreSeller: User;
  public store: firebase.database.Reference;

  constructor() {
    firebase.auth().onAuthStateChanged( user => {
      if(user){
        this.StoreSeller = user;
        this.store = firebase.database().ref(`/store`);
        }
    });
  }

  createStore(name: string, categoria: string, descricao: string): firebase.database.ThenableReference {    
    return this.store.push({name: name, category: categoria, description: descricao , seller: this.StoreSeller.uid })
  }
}
