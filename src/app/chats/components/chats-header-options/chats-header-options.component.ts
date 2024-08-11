import { Component, OnInit } from '@angular/core';
import { IonLabel, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cameraOutline, ellipsisVertical, qrCode } from 'ionicons/icons';

@Component({
  selector: 'app-chats-header-options',
  templateUrl: './chats-header-options.component.html',
  styleUrls: ['./chats-header-options.component.scss'],
  imports: [IonIcon, IonLabel],
  standalone: true,
})
export class ChatsHeaderOptionsComponent implements OnInit {
  constructor() {
    addIcons({ qrCode, cameraOutline, ellipsisVertical });
  }

  ngOnInit() {}
}
