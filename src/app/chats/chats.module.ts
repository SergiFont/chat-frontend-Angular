import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ChatsPageComponent } from './pages/chats-page/chats-page.component';
import { SharedModule } from '../shared/shared.module';
import { ChatsRoutingModule } from './chats-routing.module';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [
    ChatsPageComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    ChatsRoutingModule,
    SharedModule
  ],
})
export class ChatsModule { }
