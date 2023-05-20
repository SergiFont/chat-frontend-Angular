import { Injectable } from '@angular/core';
// import { WebsocketService } from './websocket.service';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(
    // public wsService: WebsocketService,
    public authService: AuthService
  ) { }



    sendMessage( message:string ) {

      const username = this.authService.currentUser()!.username

      this.authService.emit('message-from-client', { from: username, message })

    }

    getMessages() {
      return this.authService.listen( 'message-from-server' )
    }

    getPrivateMessages() {
      return this.authService.listen( 'private-message' )
    }

}