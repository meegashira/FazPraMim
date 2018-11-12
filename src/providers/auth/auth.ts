import { Injectable} from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class AuthProvider {
  noImage = 'https://firebasestorage.googleapis.com/v0/b/fazpramim-4bbe8.appspot.com/o/no-picture_icon.png?alt=media&token=11a96a00-8b0f-467f-b8d3-522ed7a6d01e';
  constructor() { 
  }
  
  loginUser(email: string, password: string): Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  signupUser(name: string, surname: string, rg: string, cpf: string, email: string, password: string,
      address: string, complement:string, neighborhood:string, city:string, state:string, cep:number, 
      userType: string): Promise<any> {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then( newUser => {
        firebase
        .database()
        .ref(`/userProfile`)
        .child(newUser.uid)
        .set({ email: email , name: name, surname: surname, rg: rg, cpf: cpf, address: address, 
            complement: complement, neighborhood: neighborhood, city: city, state: state, cep: cep, 
            userType: userType,photo:this.noImage, avaliacao: 0});
      })
      .catch(error => {
        console.error(error);
        throw new Error(error);
      });
  }

  

  resetPassword(email: string): Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  logoutUser(): Promise<void> {
    const userId: string = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref(`/userProfile/${userId}`)
      .off();
    return firebase.auth().signOut();
  }
}