import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import firebase, { User } from 'firebase';
import { StoreProvider } from '../../providers/store/store';
import { AngularFireList, AngularFireAction } from 'angularfire2/database';
import { User } from '../../app/models/user.model';
import { UserService } from '../../providers/user/user.service';
import { Observable } from 'rxjs/Observable';
import firebase from 'firebase';
import { ChatPage } from '../chat/chat';
import { ChatService } from '../../providers/chat/chat.service';
import { Chat } from '../../app/models/chat.model';
import { AuthProvider } from '../../providers/auth/auth';


@IonicPage()
@Component({
  selector: 'page-chat-list',
  templateUrl: 'chat-list.html',
})

export class ChatListPage {

  view: string = 'chats'
  //users: AngularFireList<User[]>;
  //users: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
  chats: Observable<Chat[]>;
  users: Observable<User[]>;

  constructor(
    public navCtrl: NavController,
    public userService: UserService,
    public chatService: ChatService,
    public authProvide: AuthProvider
  ) {
  }

  ionViewDidLoad(){
    this.chats = this.chatService.mapListKeys<Chat>(this.chatService.chats)
      .map((chats: Chat[]) => chats.reverse());
    this.users = this.userService.users;
  };


  filterItems(event: any): void {
    let searchTerm: string = event.target.value;

    console.log('Busca', searchTerm);

    this.chats = this.chatService.mapListKeys<Chat>(this.chatService.chats)
      .map((chats: Chat[]) => chats.reverse());
    this.users = this.userService.users;

   if (searchTerm) {

      switch(this.view) {

        case 'chats':
          this.chats = this.chats
            .map((chats: Chat[]) => chats.filter((chat: Chat) => (chat.title && chat.title.toLowerCase().indexOf(searchTerm.toLocaleLowerCase()) > -1)));
          break;

        case 'users':
          this.users = this.users
            .map((users: User[]) => users.filter((user: User) => (user.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)));
          break;

      }

    }

  }


  onChatCreate(recipientUser: User): void{

    this.userService.mapObjectKey<User>(this.userService.currentUser).first().subscribe((currentUser: User) =>{
      this.chatService.mapObjectKey<Chat>(this.chatService.getDeepChat(currentUser.$key, recipientUser.$key))
      .first().subscribe(( chat: Chat) => {
        console.log('Chat', chat);
        if (!chat.title) {

          let timestamp: Object = firebase.database.ServerValue.TIMESTAMP;

          //let chat1 = new Chat('', timestamp, recipientUser.name, (recipientUser.photo || ''));
          let chat1 = new Chat('', timestamp, recipientUser.name, '');
          this.chatService.create(chat1, currentUser.$key, recipientUser.$key);

          //let chat2 = new Chat('', timestamp, currentUser.name, (currentUser.photo || ''));
          let chat2 = new Chat('', timestamp, currentUser.name, '');
          this.chatService.create(chat2, recipientUser.$key, currentUser.$key);
        }

      });
    });

    this.navCtrl.push(ChatPage, {
      recipientUser: recipientUser
    });

  }

  onChatOpen(chat: Chat): void {

    let recipientUserId: string = chat.$key;

    this.userService.mapObjectKey<User>(
      this.userService.get(recipientUserId)
    )
      .first()
      .subscribe((user: User) => {

        this.navCtrl.push(ChatPage, {
          recipientUser: user
        });

      });

  }



}
/*
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
};*/
