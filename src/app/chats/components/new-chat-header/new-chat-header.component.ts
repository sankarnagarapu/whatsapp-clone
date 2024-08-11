import { Component, OnInit } from '@angular/core';
import { IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline, ellipsisVertical, search } from 'ionicons/icons';

@Component({
  selector: 'app-new-chat-header',
  templateUrl: './new-chat-header.component.html',
  styleUrls: ['./new-chat-header.component.scss'],
  standalone: true,
  imports: [IonLabel, IonIcon],
})
export class NewChatHeaderComponent implements OnInit {
  constructor() {
    addIcons({ search, ellipsisVertical, arrowBackOutline });
  }

  ngOnInit() {}
}
