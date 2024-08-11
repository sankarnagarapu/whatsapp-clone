import { Component, OnInit } from '@angular/core';
import { IonSearchbar } from "@ionic/angular/standalone";

@Component({
  selector: 'app-chats-header-search',
  templateUrl: './chats-header-search.component.html',
  styleUrls: ['./chats-header-search.component.scss'],
  standalone: true,
  imports: [IonSearchbar, ],
})
export class ChatsHeaderSearchComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
