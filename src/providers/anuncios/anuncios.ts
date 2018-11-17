import { Injectable } from '@angular/core';
import firebase, { User } from 'firebase/app';
import 'firebase/database';

@Injectable()
export class AnunciosProvider {
  public store: User;
  public anuncio: firebase.database.Reference;
  constructor() {
    firebase.auth().onAuthStateChanged( user => {
      if(user){
        this.store = user;
        this.anuncio = firebase.database().ref(`/anuncio`);
        }
    });
  }

  getAnuncio(): firebase.database.Reference {
    return this.anuncio;
  }

  createAnuncio(tipoAnuncio:string, NomeAnuncio: string, CategoriaAnuncio: string, ValorAnuncio:string, UnidadeAnuncio:string, DescricaoAnuncio: string): firebase.database.ThenableReference {    
    return this
    .anuncio
    .push({
      type:tipoAnuncio, 
      name: NomeAnuncio, 
      category: CategoriaAnuncio,
      price:ValorAnuncio,
      unidade:UnidadeAnuncio, 
      description: DescricaoAnuncio , 
      store: "0" 
    })
  }

  deleteAnuncio(uid: string): void {
    firebase.database().ref(`/anuncio/${uid}`).remove();
  }

  getAnuncioDetail(parameter:string): firebase.database.Reference {
    return this.anuncio.child(parameter);
  }
}