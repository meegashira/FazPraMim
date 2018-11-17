import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase, { User } from 'firebase';
import { StoreProvider } from '../../providers/store/store';

@IonicPage()
@Component({
  selector: 'page-chat-list',
  templateUrl: 'chat-list.html',
})
export class ChatListPage {
  public user: User;
  chatrooms = [];
  public store: any = {};
  chatroomRef = firebase.database().ref('chatroom/');
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storeProvider: StoreProvider,
  ) {
    firebase.auth().onAuthStateChanged( user => {
      if(user){
        this.user = user;
        }
    }); 
    this.chatroomRef.on('value', resp => {
      this.chatrooms = [];
      this.chatrooms = snapshotToArray(resp);
    });
  }

  joinChatroom(key:string):void {
    this.navCtrl.push('ChatroomPage', {
      key:key,
      userUid:this.user.uid
    });
  }

}

export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });

  return returnArr;
};
