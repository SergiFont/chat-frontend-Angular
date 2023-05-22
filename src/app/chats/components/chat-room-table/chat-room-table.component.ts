import { Component, Input } from '@angular/core';
import { ChatRoom } from '../../interfaces/Chat-room.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'chat-room-table',
  templateUrl: './chat-room-table.component.html',
  styles: [
  ]
})
export class ChatRoomTableComponent {

  @Input()
  public chatRooms?: Observable<ChatRoom[]>

}
