import { RouterModule, Routes } from '@angular/router';
import { ChatsPageComponent } from './pages/chats-page/chats-page.component';
import { NgModule } from '@angular/core';
import { ChatRoomComponent } from './pages/chat-room/chat-room.component';
import { MessagesDemoComponent } from './components/messages/messagesdemo.component';
import { checkTokenGuard } from '../auth/guards/check-token.guard';

export const routes: Routes = [
    {
      path: '',
      component: ChatsPageComponent,

    },
    {
      path: 'demo',
      canActivate: [checkTokenGuard],
      component: MessagesDemoComponent

    },
    {
      path: 'room',
      canActivate: [checkTokenGuard],
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