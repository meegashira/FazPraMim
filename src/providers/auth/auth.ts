import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class AuthProvider {
  constructor() { }

  loginUser(email: string, password: string): Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  signupUser(name: string, surname: string, rg: string, cpf: string, email: string, password: string,address: string, complement:string, neighborhood:string, city:string, state:string, cep:number, userType: string): Promise<any> {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then( newUser => {
        firebase
        .database()
        .ref('/userProfile/'+ userType)
        .child(newUser.uid)
        .set({ email: email , name: name, surname: surname, rg: rg, cpf: cpf, address: address, complement: complement, neighborhood: neighborhood, city: city, state: state, cep: cep});
      });
  }

  


  resetPassword(email: string): Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  logoutUser(): Promise<void> {
    return firebase.auth().signOut();
    //const userId: string = firebase.auth().currentUser.uid;
    //firebase
    //  .database()
    //  .ref(`/userProfile/${userId}`)
    //  .off();
    //return firebase.auth().signOut();
  }
}