import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import firebase, { User } from 'firebase/app';
import 'firebase/database';

/*
  Generated class for the AnunciosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AnunciosProvider {


  public AnuncioStore: User;
  public store: firebase.database.Reference;

  constructor() {
    firebase.auth().onAuthStateChanged( user => {
      if(user){
        this.AnuncioStore = user;
        this.store = firebase.database().ref(`/anuncio`);
        }
    });
  }

  createAnuncio(name: string, categoria: string, descricao: string, tipo:string): firebase.database.ThenableReference {    
    return this.store.push({name: name, category: categoria, description: descricao, type:tipo , seller: this.AnuncioStore.uid })
  }
}
