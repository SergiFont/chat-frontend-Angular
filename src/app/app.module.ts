import { NgModule, forwardRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
import { environment } from 'src/environments/environments';

export const config: SocketIoConfig = {
  url: environment.wsUrl,
  options: {
    autoConnect: false,
    // extraHeaders: {
    //   Authorization: `${localStorage.getItem('token')}`
    // }
  }
};


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ChatsModule } from './chats/chats.module';
import { UsersModule } from './users/users.module';
import { WebsocketModule } from './websocket/websocket.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ChatsModule,
    UsersModule,
    WebsocketModule,
    SocketIoModule.forRoot(config),
    HomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
