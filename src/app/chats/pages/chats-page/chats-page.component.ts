import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChatRoom } from '../../interfaces/Chat-room.interface';
import { ChatsService } from '../../services/chats.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Subscription } from 'rxjs';
import { MessagesService } from 'src/app/websocket/services/messages.service';

@Component({
  selector: 'chats-page',
  templateUrl: './chats-page.component.html',
  styleUrls: [
    './chats-page.component.css'
  ]
})
export class ChatsPageComponent implements OnInit {

  public chatRooms: ChatRoom[] = []
  public isLoading: boolean = false

  constructor(
    private readonly chatsService: ChatsService,
    private readonly authService: AuthService,
    private readonly messagesService: MessagesService
  ) { }

  ngOnInit(): void {
    this.chatsService.findAllRooms()
      .subscribe(chatRooms => {
        return this.chatRooms = chatRooms
      })

      

  }

  searchByName(term: string): void {

    this.isLoading = true

    this.chatsService.findRoom(term)
      .subscribe(room => {
        this.chatRooms = room
        this.isLoading = false
      })

  }

}
