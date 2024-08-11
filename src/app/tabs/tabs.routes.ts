import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'chats',
        loadComponent: () =>
          import('../chats/pages/chats-main/chats-main.component').then(
            (m) => m.ChatsMainComponent
          ),
      },
      {
        path: 'updates',
        loadComponent: () =>
          import('../updates/pages/updates-main/updates-main.component').then(
            (m) => m.UpdatesMainComponent
          ),
      },
      {
        path: 'communities',
        loadComponent: () =>
          import(
            '../communities/pages/communities-main/communities-main.component'
          ).then((m) => m.CommunitiesMainComponent),
      },
      {
        path: 'calls',
        loadComponent: () =>
          import('../calls/pages/calls-main/calls-main.component').then(
            (m) => m.CallsMainComponent
          ),
      },

      {
        path: '',
        redirectTo: '/tabs/chats',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/chats',
    pathMatch: 'full',
  },
];
