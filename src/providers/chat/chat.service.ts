import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chat } from '../../app/models/chat.model';
import * as firebase from 'firebase';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { BaseService } from '../base.service';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class ChatService extends BaseService{

  chats: AngularFireList<Chat>;

  constructor(
    public afAuth: AngularFireAuth,
    public af: AngularFireDatabase,
    public http: HttpClient) {
    super();
    console.log('Hello ChatProvider Provider');
    this.setChats();
  }

  private setChats(): void {
    this.afAuth.authState
      .subscribe((authUser: firebase.User) => {
        if (authUser) {

          this.chats = this.af.list<Chat>(`/chats/${authUser.uid}`,
            (ref: firebase.database.Reference) => ref.orderByChild('timestamp')
          );

        }
      });
  }

  create(chat: Chat, userId1: string, userId2: string): Promise<void> {
    return this.af.object<Chat>(`/chats/${userId1}/${userId2}`).set(chat).catch(this.handlePromiseError);
  }

  getDeepChat(userId1: string, userId2: string): AngularFireObject<Chat>{
    return this.af.object<Chat>(`/chats/${userId1}/${userId2}`);
  }

  /*updatePhoto(chat: AngularFireObject<Chat>, chatPhoto: string, recipientUserPhoto: string): Promise<boolean> {
    if (chatPhoto != recipientUserPhoto) {
      return chat.update({
        photo: recipientUserPhoto
      }).then(() => {
        return true;
      }).catch(this.handlePromiseError);
    }
    return Promise.resolve(false);
  }*/

}
