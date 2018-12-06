import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { BaseService } from '../base.service';
import { Message } from '../../app/models/message.model';
import firebase from 'firebase';

@Injectable()
export class MessageService extends BaseService{

  constructor(
    public db: AngularFireDatabase,
    public http: HttpClient) {
    super();
    console.log('Hello MessageProvider Provider');
  }

  create(message: Message, listMessages: AngularFireList<Message>): Promise<void> {
    return Promise.resolve(listMessages.push(message));
  }

  getMessages(userId1: string, userId2: string): AngularFireList<Message> {
    console.log(userId1, userId2);

    return this.db.list(`/messages/${userId1}-${userId2}`,
      (ref: firebase.database.Reference) => ref.limitToLast(30).orderByChild('timestamp')
    );
  }

}
