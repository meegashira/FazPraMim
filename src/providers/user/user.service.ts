import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireAction, AngularFireObject } from 'angularfire2/database'
import { User } from '../../app/models/user.model';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import { BaseService } from '../base.service';
import { FirebaseApp } from 'angularfire2';

@Injectable()
export class UserService extends BaseService{

  //users: FirebaseListObservable<User[]>
  //users: AngularFireList<User[]>
  //users: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
  users: Observable<User[]>;
  currentUser: AngularFireObject<User>;

  constructor(public af: AngularFireDatabase,
              public firebaseAuth: AngularFireAuth,
              public firebaseApp: FirebaseApp,
              public http: HttpClient) {

    super();
    this.listenAuthState();
    //this.users = this.af.database.list(`/users`);
    //this.users = this.af.list(`userProfile`);
  }

  private setUsers(uidToExclude: string): void{
    this.users = this.mapListKeys<User>(
      this.af.list<User>(`/userProfile`,
        (ref: firebase.database.Reference) => ref.orderByChild('name')
      )
    ).map((users: User[]) => {
      return users.filter((user:User) => user.$key !== uidToExclude);
    });
  }

  private listenAuthState(): void{
    this.firebaseAuth.authState
    .subscribe((authUser: firebase.User)=>{
      if(authUser){
        console.log('Auth state alterado', authUser.uid);
        this.currentUser = this.af.object(`/userProfile/${authUser.uid}`);
        this.setUsers(authUser.uid);
      }
    });
  }

  get(userId: string): AngularFireObject<User> {
    return this.af.object<User>(`/userProfile/${userId}`);
  }

  /*uploadPhoto(file: File, userId: string): firebase.storage.UploadTask {
    return this.firebaseApp
      .storage()
      .ref()
      .child(`/users/${userId}`)
      .put(file);
  }*/


  /*edit(user: {name: string, username: string, photo: string}): Promise<void> {
    return this.currentUser
      .update(user)
      .catch(this.handlePromiseError);
  }

  userExists(username: string): Observable<boolean> {
    return this.db.list(`/users`,
      (ref: firebase.database.Reference) => ref.orderByChild('name').equalTo(username)
    )
    .valueChanges()
    .map((users: User[]) => {
      return users.length > 0;
    }).catch(this.handleObservableError);
  }*/



}
