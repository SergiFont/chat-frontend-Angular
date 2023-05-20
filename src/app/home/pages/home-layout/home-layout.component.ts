import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
// import { AuthService } from 'src/app/auth/services/auth.service';
import { MessagesService } from 'src/app/websocket/services/messages.service';
// import { WebsocketService } from 'src/app/websocket/services/websocket.service';
// import { Socket } from 'ngx-socket-io';
@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styles: [
  ]
})
export class HomeLayoutComponent implements OnInit {

  // isSocketConnected: boolean

  constructor(
    // private socket: Socket,
    // public wsService: WebsocketService,
    public messagesService: MessagesService,
    public authService: AuthService
    // private readonly authService: AuthService
  ) {}


  ngOnInit(): void {

    // this.isSocketConnected = this.socket.ioSocket.connected

    // this.authService.currentUser()?.id
    this.authService.checkStatus( this.authService.currentUser()!.id )

    this.messagesService.getPrivateMessages().subscribe( msg => {

      console.log(msg);

    })

  }

}
