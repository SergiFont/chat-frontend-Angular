import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(
    public wsService: WebsocketService
  ) { }



    sendMessage( message:string ) {

      this.wsService.emit('message-from-client', { from: 'Sergi', message })

    }

    getMessages() {
      return this.wsService.listen('message-from-server')
    }

}
