import { Component, input, model, OnInit, signal } from '@angular/core';
import { ContactPayload } from '@capacitor-community/contacts';
import { IonIcon, IonLabel, IonSearchbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline, ellipsisVertical, search } from 'ionicons/icons';
import { Search } from 'js-search';

@Component({
  selector: 'app-new-chat-header',
  templateUrl: './new-chat-header.component.html',
  styleUrls: ['./new-chat-header.component.scss'],
  standalone: true,
  imports: [IonSearchbar, IonLabel, IonIcon],
})
export class NewChatHeaderComponent implements OnInit {
  search(query: string | null | undefined) {
    if (query) {
      const response = this.JsSearch.search(query);
      console.log(response);
    }
  }
  contacts = input.required<ContactPayload[]>();
  isSearching = signal(false);
  isNewChatOpen = model.required<boolean>();
  JsSearch = new Search('contactId');

  constructor() {
    let c: ContactPayload['contactId'];
    addIcons({ search, ellipsisVertical, arrowBackOutline });
  }

  ngOnInit() {
    this.JsSearch.addIndex(['name', 'display']);
    this.JsSearch.addIndex(['name', 'given']);
    this.JsSearch.addIndex(['phones', 'number']);
    this.JsSearch.addDocuments(this.contacts());

  }
}
