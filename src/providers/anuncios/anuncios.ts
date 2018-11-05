import { Injectable } from '@angular/core';
import firebase, { User } from 'firebase/app';
import 'firebase/database';

@Injectable()
export class AnunciosProvider {
  public Client: User;
  public anuncio: firebase.database.Reference;
  constructor() {
    firebase.auth().onAuthStateChanged( user => {
      if(user){
        this.Client = user;
        this.anuncio = firebase.database().ref(`/anuncio`);
        }
    });
  }

  createAnuncio(tipoAnuncio:string, NomeAnuncio: string, CategoriaAnuncio: string, ValorAnuncio:string, UnidadeAnuncio:string, DescricaoAnuncio: string): firebase.database.ThenableReference {    
    return this.anuncio.push({type:tipoAnuncio, name: NomeAnuncio, category: CategoriaAnuncio,price:ValorAnuncio,unidade:UnidadeAnuncio, description: DescricaoAnuncio , seller: "0" })
  }
}