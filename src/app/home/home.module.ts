import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ChatsRoutingModule, routes } from '../chats/chats-routing.module';
import { HomeLayoutComponent } from './pages/home-layout/home-layout.component';
import { ChatsModule } from '../chats/chats.module';
import { UsersModule } from '../users/users.module';
import { WebsocketModule } from '../websocket/websocket.module';


@NgModule({
  declarations: [
    HomePageComponent,
    HomeLayoutComponent,
  ],
  imports: [
    CommonModule,
    ChatsRoutingModule,
    HomeRoutingModule,
    SharedModule,
    ChatsModule,
    UsersModule,
  ]
})
export class HomeModule { }