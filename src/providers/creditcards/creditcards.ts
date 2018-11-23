import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase, { User } from 'firebase/app';
import 'firebase/database';

@Injectable()

export class CreditCardsProvider {
  private PATH = 'creditcards/';
  public Client: User;
  public creditcards: firebase.database.Reference;

  constructor(private db: AngularFireDatabase) {
    firebase.auth().onAuthStateChanged( user => {
      if(user){
        this.Client = user;
        this.creditcards = firebase.database().ref(`/creditcards`);
        }
    }); 
  }

  createPayment(numero: string, validade: string, cvv: string, bandeira:string): firebase.database.ThenableReference {    
    return this
    .creditcards
    .push({
      numero: numero, 
      validade: validade, 
      cvv: cvv, 
      bandeira:bandeira,
      cliente: 1,
      valor: 2,
      vendedor:1111  })
  }


}
