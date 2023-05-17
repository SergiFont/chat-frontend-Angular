import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from 'src/environments/environments';

const config: SocketIoConfig = {
  url: environment.wsUrl,
  options: {
    extraHeaders: {
      Authorization: `${localStorage.getItem('token')}`
    }
  } };

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ChatsModule } from './chats/chats.module';
import { UsersModule } from './users/users.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { WebsocketModule } from './websocket/websocket.module';

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
    UsersModule,
    WebsocketModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
