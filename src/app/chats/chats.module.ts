import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ChatsPageComponent } from './pages/chats-page/chats-page.component';
import { ChatsRoutingModule } from './chats-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ChatRoomTableComponent } from './components/chat-room-table/chat-room-table.component';
import { ChatRoomComponent } from './pages/chat-room/chat-room.component';
import { WebsocketModule } from '../websocket/websocket.module';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { UsersModule } from '../users/users.module';
import { AuthModule } from '../auth/auth.module';
import { MessagesDemoComponent } from './components/messages/messagesdemo.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ChatsPageComponent,
    ChatRoomTableComponent,
    ChatRoomComponent,
    FooterComponent,
    MessagesDemoComponent
  ],
  imports: [
    CommonModule,
    ChatsRoutingModule,
    SharedModule,
    FormsModule,
    UsersModule,
    AuthModule,
    RouterModule,
    WebsocketModule
  ],
  exports: [
    ChatsRoutingModule
  ]

})
export class ChatsModule { }
