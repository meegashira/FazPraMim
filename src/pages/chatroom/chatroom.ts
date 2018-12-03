import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import * as firebase from 'Firebase';

@IonicPage({ name: 'ChatroomPage' , segment: "chatroom/:chatroomId/:userUid" })
@Component({
  selector: 'page-chatroom',
  templateUrl: 'chatroom.html',
})
export class ChatroomPage {
  @ViewChild(Content) content: Content;

  data = { type:'', name:'', message:'' };
  chats = [];
  roomkey:string;
  name:string;
  offStatus:boolean = false;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.roomkey = this.navParams.get("key") as string;
    this.name = this.navParams.get("userUid") as string;
    this.data.type = 'message';
    this.data.name = this.name;
    console.log(this.name);
    /*let joinData = firebase.database().ref('chatroom/'+this.roomkey+'/chat').push();
    joinData.set({
      type:'join',
      user:this.name,
      message:this.name+' entrou no chat. Diga olá!',
      sendDate:Date()
    });
    */
    this.data.message = '';
  
    firebase.database().ref('chatroom/'+this.roomkey+'/chat').on('value', resp => {
      this.chats = [];
      this.chats = snapshotToArray(resp);
      setTimeout(() => {
        if(this.offStatus === false) {
          this.content.scrollToBottom(300);
        }
      }, 1000);
    });
  }

  sendMessage() {
    let newData = firebase.database().ref('chatroom/'+this.roomkey+'/chat').push();
    newData.set({
      type:this.data.type,
      user:this.data.name,
      message:this.data.message,
      sendDate:Date()
    });
    this.data.message = '';
  }

  /*exitChat() {
    let exitData = firebase.database().ref('chatroom/'+this.roomkey+'/chat').push();
    exitData.set({
      type:'exit',
      user:this.name,
      message:this.name+' saiu do chat.',
      sendDate:Date()
    });
  
    this.offStatus = true;
  
    this.navCtrl.push('ChatListPage', {
      name:this.name
    });
  }*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatroomPage');
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