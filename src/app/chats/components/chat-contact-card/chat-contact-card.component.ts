import { Component, OnInit } from '@angular/core';
import { IonImg, IonLabel, IonIcon } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { videocam } from 'ionicons/icons';

@Component({
  selector: 'app-chat-contact-card',
  templateUrl: './chat-contact-card.component.html',
  styleUrls: ['./chat-contact-card.component.scss'],
  standalone: true,
  imports: [IonIcon, IonLabel, IonImg, ]
})
export class ChatContactCardComponent  implements OnInit {
  profilePic =
    'https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=64';

  constructor() {
    addIcons({videocam})
   }

  ngOnInit() {}

}
