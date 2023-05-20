import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessagesService } from 'src/app/websocket/services/messages.service';
// import { WebsocketService } from 'src/app/websocket/services/websocket.service';


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
  messagesSubscription!: Subscription

  messages: any[] = []

  constructor(
    // public wsService: WebsocketService,
    public messageService: MessagesService
  ) {}

  ngOnInit(): void {

    this.messagesSubscription = this.messageService.getMessages().subscribe( msg => {

      this.messages.push( msg )
      this.scrollChatToBottom()

    })
  }

  ngOnDestroy(): void {

    this.messagesSubscription.unsubscribe()

  }

  send() {

    if (!( this.text.trim() )) return

    this.messageService.sendMessage(this.text)

    this.text = ''
  }

  scrollChatToBottom(): void {
    setTimeout(() => {
      const chatMessagesElement = this.chatMessagesRef.nativeElement;
      chatMessagesElement.scrollTop = chatMessagesElement.scrollHeight;
    }, 0);
  }

}
