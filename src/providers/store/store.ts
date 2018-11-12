import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase, { User } from 'firebase/app';
import 'firebase/database';

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
  public avaliacao: firebase.database.Reference = firebase.database().ref('/store/avaliacao');
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
    return this.store.push({name: name, category: categoria, description: descricao , seller: this.StoreSeller.uid, storePhoto: 'https://firebasestorage.googleapis.com/v0/b/fazpramim-4bbe8.appspot.com/o/no-Storeimage.png?alt=media&token=820edc2e-a79f-4a8b-aef1-6e93f7aeeed6'})
  } 

  getAvaliacao(): firebase.database.Reference {
    return this.avaliacao;
  }

  updateAvaliacao(avaliacao: number): Promise<any> {
    return this.store.update({ avaliacao });
  }

  getStore(): firebase.database.Reference {
    return this.store;
  }

  deleteStore(uid: string): void {
    firebase.database().ref(`/store/${uid}`).remove();
  }
}
