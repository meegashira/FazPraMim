import { Injectable } from '@angular/core';
import firebase from 'firebase/app';

@Injectable()
export class EventProvider {
    public eventListRef: firebase.database.Reference;

  constructor() {
    firebase.auth().onAuthStateChanged(store => {
        if (store) {
          this.eventListRef = firebase
            .database()
            .ref(`/Store/${store.uid}/eventList`);
        }
      });
  }

  createEvent(
    eventName: string,
    eventCategory: string,
    eventDescription: string,
    eventSeller: string
  ): firebase.database.ThenableReference {
    return this.eventListRef.push({
      name: eventName,
      category: eventCategory,
      description:eventDescription,
      seller: eventSeller
    });
  }

  getEventList(): firebase.database.Reference {
    return this.eventListRef;
  }

  getEventDetail(eventId:string): firebase.database.Reference {
    return this.eventListRef.child(eventId);
  }
}