import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ChatsRoutingModule, routes } from '../chats/chats-routing.module';


@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    ChatsRoutingModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }