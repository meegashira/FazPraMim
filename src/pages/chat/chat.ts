import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { User } from '../../app/models/user.model';
import { UserService } from '../../providers/user/user.service';
import { AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Message } from '../../app/models/message.model';
import { Chat } from '../../app/models/chat.model';
import { ChatService } from '../../providers/chat/chat.service';
import { MessageService } from '../../providers/message/message.service';
import firebase from 'firebase';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  @ViewChild(Content) content: Content;
  //messages: string[] = [ ];
  messages: AngularFireList<Message>;
  //messages: AngularFireList<Message>;
  viewMessages: Observable<Message[]>;
  pageTitle: string;
  sender: User;
  recipient: User;
  private chat1: AngularFireObject<Chat>;
  private chat2: AngularFireObject<Chat>;


  constructor(public navCtrl: NavController,
    public messageService: MessageService,
    public AuthProvider: AuthProvider,
    public chatService: ChatService,
    public navParams: NavParams,
    public userService: UserService) {
  }

  /*ionViewCanEnter(): Promise<boolean>{
    return this.AuthProvider.authenticated;
  }*/

  ionViewDidLoad() {

    this.recipient = this.navParams.get('recipientUser');
    //console.log('TesteTitulo', this.recipient);
    this.pageTitle = this.recipient.name;

    this.userService
      .mapObjectKey<User>(this.userService.currentUser)
      .first()
      .subscribe((currentUser: User) => {
        this.sender = currentUser;

        this.chat1 = this.chatService.getDeepChat(this.sender.$key, this.recipient.$key);
        this.chat2 = this.chatService.getDeepChat(this.recipient.$key, this.sender.$key);

        let doSubscription = () => {
          this.viewMessages = this.messageService.mapListKeys<Message>(this.messages);
          this.viewMessages
            .subscribe((messages: Message[]) => {
              this.scrollToBottom();
            });
        };

        this.messages = this.messageService
          .getMessages(this.sender.$key, this.recipient.$key);

        this.messages
          .valueChanges()
          .first()
          .subscribe((messages: Message[]) => {

            if (messages.length === 0) {

              this.messages = this.messageService
                .getMessages(this.recipient.$key, this.sender.$key);

                doSubscription();
            }else{
              doSubscription();
            }

          });

      });

  }

  sendMessage(newMessage: string): void{
   //this.messages.push(newMessage);

   if (newMessage) {

    let currentTimestamp: Object = firebase.database.ServerValue.TIMESTAMP;

    this.messageService.create(
      new Message(
        this.sender.$key,
        newMessage,
        currentTimestamp
      ),
      this.messages
    ).then(() => {

      this.chat1
        .update({
          lastMessage: newMessage,
          timestamp: currentTimestamp
        });

      this.chat2
        .update({
          lastMessage: newMessage,
          timestamp: currentTimestamp
        });


    });

   }

  }

  private scrollToBottom(duration?: number): void {
    setTimeout(() => {
      if (this.content._scroll) {
        this.content.scrollToBottom(duration || 300);
      }
    }, 50);
  }


}
