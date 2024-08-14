import {
  Component,
  computed,
  inject,
  model,
  OnInit,
  Pipe,
  PipeTransform,
  Signal,
  signal,
} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonButton,
  ModalController,
  IonIcon,
  IonLabel,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonImg,
} from '@ionic/angular/standalone';
import { NewChatHeaderComponent } from '../../components/new-chat-header/new-chat-header.component';
import { ContactPayload, Contacts } from '@capacitor-community/contacts';
import { Toast } from '@capacitor/toast';
import { addIcons } from 'ionicons';
import { personCircle } from 'ionicons/icons';
import { IonInfiniteScrollCustomEvent } from '@ionic/core';
@Pipe({ name: 'limit', standalone: true })
export class LimitPipe implements PipeTransform {
  transform<T>(value: T[], limit: number) {
    return value.slice(0, limit);
  }
}

@Component({
  selector: 'app-new-chat-contacts',
  templateUrl: './new-chat-contacts.component.html',
  styleUrls: ['./new-chat-contacts.component.scss'],
  imports: [
    IonImg,
    IonInfiniteScrollContent,
    IonInfiniteScroll,
    IonLabel,
    IonIcon,
    IonButton,
    IonContent,
    IonToolbar,
    IonHeader,
    NewChatHeaderComponent,
    LimitPipe,
  ],
  standalone: true,
})
export class NewChatContactsComponent implements OnInit {
  onIonInfinite(event: IonInfiniteScrollCustomEvent<void>) {
    this.limit.update((v) => {
      v += 10;
      return v;
    });
    event.target.complete();
  }

  isNewChatOpen = model.required<boolean>();
  modalController = inject(ModalController);
  contacts = signal<ContactPayload[]>([]);
  contactStrings: Signal<string[]> = signal<string[]>([]);
  limit = signal(10);
  constructor() {
    addIcons({ personCircle });
    this.contactStrings = computed(() =>
      this.contacts().map((c) => JSON.stringify(c))
    );
  }

  async ngOnInit() {
    await this.startContactQuery();
  }

  async startContactQuery() {
    try {
      const { contacts } = await Contacts.checkPermissions();
      if (contacts === 'granted') {
        await this.getContacts();
      } else if (contacts !== 'denied') {
        const { contacts } = await Contacts.requestPermissions();
        if (contacts === 'granted') {
          await this.getContacts();
        }
      } else {
      }
    } catch (error: any) {
      await Toast.show({
        text: error.message,
      });
    }
  }

  async askDeniedPermission() {}

  async getContacts() {
    this.contacts.set(
      (
        await Contacts.getContacts({
          projection: { name: true, image: true },
        })
      ).contacts
    );
  }
}
