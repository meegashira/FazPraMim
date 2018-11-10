import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase, { User } from 'firebase/app';
import 'firebase/database';


@Injectable()
export class AvaliacaoProvider {
  public StoreSeller: User;
  public avaliacao: firebase.database.Reference;
  public estrelas: firebase.database.Reference;

  constructor(private db: AngularFireDatabase) {
    firebase.auth().onAuthStateChanged( user => {
      if(user){
        this.StoreSeller = user;
        this.avaliacao = firebase.database().ref(`/avaliacao`);
        }
    });
  }


  createAvaliacao(estrelas: number): firebase.database.ThenableReference {    
    return this.avaliacao.push({estrelas: estrelas})
  }

  /*createAvaliacao(DescricaoAvaliacao: string, Avaliacao: number, store: string): firebase.database.ThenableReference {    
    return this.avaliacao.push({descricao: DescricaoAvaliacao, estrelas: Avaliacao , store: store })
  }*/

}