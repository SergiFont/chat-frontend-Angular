import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ChatRoom } from '../../interfaces/Chat-room.interface';
import { ChatsService } from '../../services/chats.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'chats-page',
  templateUrl: './chats-page.component.html',
  styleUrls: [
    './chats-page.component.css'
  ]
})
export class ChatsPageComponent {

  public chatRooms!: Observable<ChatRoom[]>
  public numberRooms!: Observable<number>
  public isLoading: boolean = false

  constructor( private readonly chatsService: ChatsService ) {
    this.findRooms()
  }

  findRooms(offset?: number): void {

    this.numberRooms = this.chatsService.getPaginationRooms()

    this.chatRooms = this.chatsService.retrieveRooms(offset)

  }

  searchByName(term: string): void {

    this.isLoading = true

    this.chatRooms = this.chatsService.findRooms(term)
      .pipe(
        tap(() => {
          this.isLoading = false
        }))
  }

}
