import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ChatsPageComponent } from './pages/chats-page/chats-page.component';
import { ChatsRoutingModule } from './chats-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ChatRoomTableComponent } from './components/chat-room-table/chat-room-table.component';
import { ChatRoomComponent } from './pages/chat-room/chat-room.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';

@NgModule({
  declarations: [
    ChatsPageComponent,
    ChatRoomTableComponent,
    ChatRoomComponent,
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    ChatsRoutingModule,
    SharedModule
  ],

})
export class ChatsModule { }
