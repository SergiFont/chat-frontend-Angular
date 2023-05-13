import { Component, OnInit } from '@angular/core';
import { ChatRoom } from '../../interfaces/Chat-room.interface';
import { ChatsService } from '../../services/chats.service';

@Component({
  selector: 'chats-page',
  templateUrl: './chats-page.component.html',
  styles: [
  ]
})
export class ChatsPageComponent implements OnInit {

  public defaultChatRooms?: ChatRoom[] = []
  public chatRooms: ChatRoom[] = []

  constructor( private chatsService: ChatsService ) {}

  ngOnInit(): void {
    this.chatsService.findAllRooms()
      .subscribe( chatRooms => {
        return this.defaultChatRooms = chatRooms
      })

  }

}
