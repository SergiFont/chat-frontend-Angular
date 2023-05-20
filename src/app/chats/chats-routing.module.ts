import { RouterModule, Routes } from '@angular/router';
import { isAuthenticatedGuard } from '../auth/guards/is-authenticated.guard';
import { ChatsPageComponent } from './pages/chats-page/chats-page.component';
import { NgModule } from '@angular/core';
import { checkTokenGuard } from '../auth/guards/check-token.guard';
import { ChatRoomComponent } from './pages/chat-room/chat-room.component';
import { MessagesDemoComponent } from './components/messages/messagesdemo.component';

export const routes: Routes = [
    {
      path: '',
      component: ChatsPageComponent,

    },
    {
      path: 'demo',
      component: MessagesDemoComponent

    },
    {
      path: 'room',
      component: ChatRoomComponent
    }

]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class ChatsRoutingModule { }