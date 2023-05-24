import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ChatsRoutingModule, routes } from '../chats/chats-routing.module';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { ChatsModule } from '../chats/chats.module';
import { UsersModule } from '../users/users.module';


@NgModule({
  declarations: [
    HomeLayoutComponent,
  ],
  imports: [
    CommonModule,
    ChatsRoutingModule,
    SharedModule,
    ChatsModule,
    UsersModule,
  ],
  exports: [HomeLayoutComponent]
})
export class HomeModule { }