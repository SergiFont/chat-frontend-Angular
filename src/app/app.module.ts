import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ChatsModule } from './chats/chats.module';
import { UsersModule } from './users/users.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { ChatsRoutingModule } from './chats/chats-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HomeRoutingModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ChatsModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
