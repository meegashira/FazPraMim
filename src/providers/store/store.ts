import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase, { User } from 'firebase/app';
import 'firebase/database';
import { database } from 'firebase';

/*
  Generated class for the StoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class StoreProvider {
  private PATH = 'store/';
  public StoreSeller: User;
  public store: firebase.database.Reference;
  public itemRef: firebase.database.Reference = firebase.database().ref('/store');

  constructor(private db: AngularFireDatabase) {
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

  getStore(): firebase.database.Reference {
    return this.itemRef;
  }
}
