import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersPageComponent } from '../users/pages/users-page/users-page.component';
import { isAuthenticatedGuard } from '../auth/guards/is-authenticated.guard';
import { ChatRoomComponent } from '../chats/pages/chat-room/chat-room.component';
import { checkTokenGuard } from '../auth/guards/check-token.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeLayoutComponent } from './pages/home-layout/home-layout.component';
import { LayoutPageComponent } from '../chats/pages/layout-page/layout-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomePageComponent
      },
      {
        path: 'chats',
        loadChildren: () => import('./../chats/chats.module').then( m => m.ChatsModule),
        // canActivate: [ checkTokenGuard ],

      },
      {
        path: 'users',
        canActivate: [ checkTokenGuard ],
        component: UsersPageComponent,
      },
    ]
  },
  // {
  //   path: 'home',
  //   component: HomePageComponent
  // },
  // {
  //   path: 'chats',
  //   loadChildren: () => import('./../chats/chats.module').then( m => m.ChatsModule),
  //   // canActivate: [ checkTokenGuard ],

  // },
  // {
  //   path: 'users',
  //   component: UsersPageComponent,
  //   canActivate: [ checkTokenGuard ],
  // },
  // {
  //   path: 'room',
  //   component: ChatRoomComponent
  // },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }