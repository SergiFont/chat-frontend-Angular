import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MessagesService } from 'src/app/websocket/services/messages.service';
// import { WebsocketService } from 'src/app/websocket/services/websocket.service';

export interface Message {
  from: string,
  message: string
}

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: [
    './chat-room.component.css'
  ]
})
export class ChatRoomComponent implements OnInit, OnDestroy {


  @ViewChild('chatMessages', { static: false, read: ElementRef }) chatMessagesRef!: ElementRef;
  text: string = ''
  msgSub!: Subscription
  privateMsgSub!: Subscription

  messages: any[] = []

  constructor(
    public messagesService: MessagesService,
    private readonly authService: AuthService,
  ) {}

  ngOnInit(): void {

    if ( !this.authService.socketStatus) this.authService.checkSocketStatus( this.authService.currentUser()!.id )

    this.msgSub = this.messagesService.getPrivateMessages().subscribe( msg => {

      console.log(msg);

    })

    this.privateMsgSub = this.messagesService.getMessages().subscribe( msg => {

      this.messages.push( msg )
      this.scrollChatToBottom()

    })
  }

  ngOnDestroy(): void {

    this.msgSub.unsubscribe()
    this.privateMsgSub.unsubscribe()

  }

  send() {

    if (!( this.text.trim() )) return

    this.messagesService.sendMessage(this.text)

    this.text = ''
  }

  scrollChatToBottom(): void {

    setTimeout(() => {
      const chatMessagesElement = this.chatMessagesRef.nativeElement;
      chatMessagesElement.scrollTop = chatMessagesElement.scrollHeight;
    }, 0);
    
  }

}
