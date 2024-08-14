import { NgClass } from '@angular/common';
import { Component, EnvironmentInjector, inject, signal } from '@angular/core';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  chatboxEllipsesOutline,
  chatboxEllipses,
  callOutline,
  call,
  people,
  peopleOutline,
  chatbubbles,
  chatbubblesOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, NgClass],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);
  selectedTab = signal<'chats' | 'updates' | 'calls' | 'communities'>('chats');

  constructor() {
    addIcons({
      chatboxEllipsesOutline,
      chatboxEllipses,
      callOutline,
      call,
      people,
      peopleOutline,
      chatbubbles,
      chatbubblesOutline,
    });
  }

  changeTab(tab: 'chats' | 'updates' | 'calls' | 'communities') {
    this.selectedTab.set(tab);
  }
}
