import { RouterModule, Routes } from '@angular/router';
import { isAuthenticatedGuard } from '../auth/guards/is-authenticated.guard';
import { ChatsPageComponent } from './pages/chats-page/chats-page.component';
import { NgModule } from '@angular/core';
import { checkTokenGuard } from '../auth/guards/check-token.guard';
import { ChatRoomComponent } from './pages/chat-room/chat-room.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';

export const routes: Routes = [
    {
      path: '',
      component: LayoutPageComponent,
      children: [
        {
          path: '',
          canActivate: [ checkTokenGuard ],
          component: ChatsPageComponent
        },
        {
          path: 'room',
          canActivate: [ checkTokenGuard ],
          component: ChatRoomComponent
        }
      ]
    },

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