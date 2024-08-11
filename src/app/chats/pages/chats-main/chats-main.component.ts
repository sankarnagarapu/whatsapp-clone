import { Component, inject, OnInit, signal } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  AnimationController,
  IonContent,
  IonFabButton,
  IonFab,
  IonIcon,
  IonModal,
} from '@ionic/angular/standalone';
import { ChatsHeaderOptionsComponent } from '../../components/chats-header-options/chats-header-options.component';
import { ChatsHeaderSearchComponent } from '../../components/chats-header-search/chats-header-search.component';
import { ChatContactCardComponent } from '../../components/chat-contact-card/chat-contact-card.component';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { NewChatContactsComponent } from '../new-chat-contacts/new-chat-contacts.component';
import { ModalAnimationService } from 'src/app/services/modal-animation.service';

@Component({
  selector: 'app-chats-main',
  templateUrl: './chats-main.component.html',
  styleUrls: ['./chats-main.component.scss'],
  standalone: true,
  imports: [
    IonModal,
    IonIcon,
    IonFab,
    IonFabButton,
    IonContent,
    IonToolbar,
    IonHeader,
    ChatsHeaderOptionsComponent,
    ChatsHeaderSearchComponent,
    ChatContactCardComponent,
    NewChatContactsComponent,
  ],
})
export class ChatsMainComponent implements OnInit {

  isNewChatOpen = signal(false);

  animationCtrl = inject(AnimationController);
  modalAnimation = inject(ModalAnimationService);

  enterAnimation = (baseEl: HTMLElement) =>
    this.modalAnimation.enterAnimation(baseEl, this.animationCtrl);
  leaveAnimation = (baseEl: HTMLElement) =>
    this.modalAnimation.leaveAnimation(baseEl, this.animationCtrl);

  openNewChat(event: MouseEvent) {
    event.stopPropagation();
    this.isNewChatOpen.set(true);
  }

  constructor() {
    addIcons({ add });
  }

  ngOnInit() {}
}
