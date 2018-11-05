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
  public anuncio: firebase.database.Reference;
  constructor() {
    firebase.auth().onAuthStateChanged( user => {
      if(user){
        this.AnuncioStore = user;
        this.anuncio = firebase.database().ref(`/anuncio`);
        }
    });
  }

  createAnuncio(tipoAnuncio:string, NomeAnuncio: string, CategoriaAnuncio: string, ValorAnuncio:string, UnidadeAnuncio:string, DescricaoAnuncio: string): firebase.database.ThenableReference {    
    return this.anuncio.push({type:tipoAnuncio, name: NomeAnuncio, category: CategoriaAnuncio,price:ValorAnuncio,unidade:UnidadeAnuncio, description: DescricaoAnuncio , seller: this.AnuncioStore.uid })
  }
}