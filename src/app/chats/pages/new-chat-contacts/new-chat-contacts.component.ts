import { Component, inject, model, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonButton,
  ModalController,
} from '@ionic/angular/standalone';
import { NewChatHeaderComponent } from '../../components/new-chat-header/new-chat-header.component';
import { Contacts } from '@capacitor-community/contacts';
import { Toast } from '@capacitor/toast';
@Component({
  selector: 'app-new-chat-contacts',
  templateUrl: './new-chat-contacts.component.html',
  styleUrls: ['./new-chat-contacts.component.scss'],
  imports: [
    IonButton,
    IonContent,
    IonToolbar,
    IonHeader,
    NewChatHeaderComponent,
  ],
  standalone: true,
})
export class NewChatContactsComponent implements OnInit {
  isNewChatOpen = model.required<boolean>();
  modalController = inject(ModalController);

  constructor() {}

  async ngOnInit() {
    try {
      const { contacts } = await Contacts.checkPermissions();
      console.log(contacts);
      if (contacts === 'granted') {
        const { contacts } = await Contacts.getContacts({
          projection: { name: true },
        });
        console.log(contacts);
      } else if (contacts !== 'denied') {
        const { contacts } = await Contacts.requestPermissions();
        console.log(contacts);
        if (contacts === 'granted') {
          const { contacts } = await Contacts.getContacts({
            projection: { name: true },
          });
          console.log(contacts);
        }
      }
    } catch (error) {
      Toast.show({ text: JSON.stringify(error) });
    }
  }
}
