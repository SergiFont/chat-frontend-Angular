import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/websocket/services/messages.service';
import { WebsocketService } from 'src/app/websocket/services/websocket.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styles: [
  ]
})
export class HomeLayoutComponent implements OnInit {

  constructor(
    public wsService: WebsocketService,
    public messagesService: MessagesService
  ) {}


  ngOnInit(): void {

    this.messagesService.getPrivateMessages().subscribe( msg => {

      console.log(msg);

    })

  }

}
