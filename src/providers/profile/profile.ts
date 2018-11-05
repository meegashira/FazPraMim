import { Injectable } from '@angular/core';
import firebase, { User } from 'firebase/app';
import 'firebase/database';
import AuthCredential from 'firebase/auth';

@Injectable()
export class ProfileProvider {
  public userProfile: firebase.database.Reference;
  public currentUser: User;
  
  constructor() {
    firebase.auth().onAuthStateChanged( user => {
      if(user){
        this.currentUser = user;
        this.userProfile = firebase.database().ref(`/userProfile/${user.uid}`);
      }
    });
  }

  getUserProfile(): firebase.database.Reference {
    return this.userProfile;
  }

  updateName(name: string, surname: string): Promise<any> {
    return this.userProfile.update({ name, surname });
  }

  updateRG(rg: string): Promise<any> {
    return this.userProfile.update({ rg });
  }

  updateCPF(cpf: string): Promise<any> {
    return this.userProfile.update({ cpf });
  }
  updateAddress(cep: string, state: string, city: string, neighborhood: string, address: string, complement: string): Promise<any> {
    return this.userProfile.update({ cep, state, city, neighborhood, address, complement });
  }

  updateEmail(newEmail: string, password: string): Promise<any> {
    const credential: AuthCredential = firebase.auth.
      EmailAuthProvider.credential(
        this.currentUser.email,
        password
      );
    return this.currentUser
      .reauthenticateWithCredential(credential)
      .then(user => {
        this.currentUser.updateEmail(newEmail).then(user => {
          this.userProfile.update({ email: newEmail });
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  updatePassword(newPassword: string, oldPassword: string): Promise<any> {
    const credential: AuthCredential = firebase.auth
      .EmailAuthProvider.credential(
        this.currentUser.email,
        oldPassword
      );
  
    return this.currentUser
      .reauthenticateWithCredential(credential)
      .then(user => {
        this.currentUser.updatePassword(newPassword).then(user => {
          console.log('Senha foi mudada com sucesso.');
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

}