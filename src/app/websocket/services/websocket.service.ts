import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus = false

  constructor(
    private socket: Socket
    ) {
      console.log(socket);
      this.checkStatus()
     }

     checkStatus() {

      this.socket.on('connect', () => {
        console.log('Connected to the server');
        this.socketStatus = true
      })

      this.socket.on('disconnect', () => {
        console.log('Disconnected from the server');
        this.socketStatus = false
      })
     }

     emit( event: string, payload?: any ) {

      console.log('Emitting ', event);
      this.socket.emit ( event, payload )

     }

     listen( event: string ) {
      return this.socket.fromEvent( event )
     }
}
