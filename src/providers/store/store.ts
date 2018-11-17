import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase, { User } from 'firebase/app';
import 'firebase/database';

@Injectable()

export class StoreProvider {
  private PATH = 'store/';
  public StoreSeller: User;
  public store: firebase.database.Reference;
  public storeList: any;

  constructor(private db: AngularFireDatabase) {
    this.storeList = [];
    firebase.auth().onAuthStateChanged( user => {
      if(user){
        this.StoreSeller = user;
        this.store = firebase.database().ref(`/store`);
        }
    }); 
  }

  createStore(name: string, categoria: string, descricao: string): firebase.database.ThenableReference {    
    return this
    .store
    .push({
      name: name, 
      category: categoria, 
      description: descricao , 
      seller: this.StoreSeller.uid,
      storePhoto: 'https://firebasestorage.googleapis.com/v0/b/fazpramim-4bbe8.appspot.com/o/no-Storeimage.png?alt=media&token=820edc2e-a79f-4a8b-aef1-6e93f7aeeed6'
    })
  }

  getStore(): firebase.database.Reference {
    return this.store;
  }

  deleteStore(uid: string): void {
    firebase.database().ref(`/store/${uid}`).remove();
  }

  getStoreDetail(parameter:string): firebase.database.Reference {
    return this.store.child(parameter);
  }
}
