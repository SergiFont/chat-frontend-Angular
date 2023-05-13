import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ChatsPageComponent } from './pages/chats-page/chats-page.component';
import { ChatsRoutingModule } from './chats-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ChatRoomTableComponent } from './components/chat-room-table/chat-room-table.component';

@NgModule({
  declarations: [
    ChatsPageComponent,
    ChatRoomTableComponent,
  ],
  imports: [
    CommonModule,
    ChatsRoutingModule,
    SharedModule
  ],

})
export class ChatsModule { }
