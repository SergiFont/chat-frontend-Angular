import { Component, OnInit } from '@angular/core';
import { ChatRoom } from '../../interfaces/Chat-room.interface';
import { ChatsService } from '../../services/chats.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'chats-page',
  templateUrl: './chats-page.component.html',
  styles: [
  ]
})
export class ChatsPageComponent implements OnInit {

  // public defaultChatRooms?: ChatRoom[] = []
  public chatRooms: ChatRoom[] = []
  // public room: ChatRoom
  public isLoading: boolean = false

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private chatsService: ChatsService,
     ) {}

  ngOnInit(): void {
    this.chatsService.findAllRooms()
      .subscribe( chatRooms => {
        return this.chatRooms = chatRooms
      })

  }

  searchByName( term: string ): void {

    this.isLoading = true

    this.chatsService.findRoom( term )
      .subscribe( room => {
        this.chatRooms = room
        this.isLoading = false
      })

  }

}
