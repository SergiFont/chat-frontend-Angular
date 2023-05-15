import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersPageComponent } from '../users/pages/users-page/users-page.component';
import { isAuthenticatedGuard } from '../auth/guards/is-authenticated.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ChatsPageComponent } from '../chats/pages/chats-page/chats-page.component';
import { checkTokenGuard } from '../auth/guards/check-token.guard';
import { ChatRoomComponent } from '../chats/pages/chat-room/chat-room.component';

const routes: Routes = [
  {
    path: 'chats',
    loadChildren: () => import('./../chats/chats.module').then( m => m.ChatsModule),
    canActivate: [ isAuthenticatedGuard ],

  },
  {
    path: 'users',
    canActivate: [ isAuthenticatedGuard ],
    component: UsersPageComponent
  },
  {
    path: 'room',
    canActivate: [ isAuthenticatedGuard ],
    component: ChatRoomComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }