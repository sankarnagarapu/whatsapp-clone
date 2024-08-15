import { Component, OnInit, signal } from '@angular/core';
import { IonLabel, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cameraOutline, ellipsisVertical, qrCode } from 'ionicons/icons';
import { ActionSheet } from '@capacitor/action-sheet';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-chats-header-options',
  templateUrl: './chats-header-options.component.html',
  styleUrls: ['./chats-header-options.component.scss'],
  imports: [IonIcon, IonLabel, NgClass],
  standalone: true,
})
export class ChatsHeaderOptionsComponent implements OnInit {
  isMenuOpen = signal(false);
  async openMenu(event: MouseEvent) {
    event.stopPropagation();

    this.isMenuOpen.set(!this.isMenuOpen());
  }
  constructor() {
    addIcons({ qrCode, cameraOutline, ellipsisVertical });
  }

  ngOnInit() {}
}
