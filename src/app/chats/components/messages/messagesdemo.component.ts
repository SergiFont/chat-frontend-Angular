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
  templateUrl: './messagesdemo.component.html'
})
export class MessageDemoComponent implements OnInit {


  @ViewChild('chatMessages', { static: false, read: ElementRef }) chatMessagesRef!: ElementRef;
  text: string = ''

  messages: any[] = [
    { severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' },
    { severity: 'info', summary: 'Info Message', detail: 'this.text' },
    { severity: 'info', detail: 'PrimeNG rocks' },
    { severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' },
    { severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' },
  ]

  constructor(
    // public wsService: WebsocketService,
    public messagesService: MessagesService,
    private readonly authService: AuthService,
  ) {}

  ngOnInit(): void {

    if ( !this.authService.socketStatus) this.authService.checkSocketStatus( this.authService.currentUser()!.id )

    this.messagesService.getPrivateMessages().subscribe( msg => {

      this.messages.push({ severity: 'info', sumary: msg.from, detail: msg.message})
      console.log(msg);

    })

    this.messagesService.getMessages().subscribe( msg => {

      this.messages.push( { severity: 'info', summary: 'Info Message', text: msg.message } )
      // this.scrollChatToBottom()

    })
  }

  send() {

    if (!( this.text.trim() )) return

    this.messagesService.sendMessage(this.text)

    // this.text = ''
  }

  /* scrollChatToBottom(): void {
    setTimeout(() => {
      const chatMessagesElement = this.chatMessagesRef.nativeElement;
      chatMessagesElement.scrollTop = chatMessagesElement.scrollHeight;
    }, 0);
  } */


  showInfoViaMessages() {
    this.messages.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
}

showWarnViaMessages() {
  this.messages = []
    this.messages.push({ severity: 'warn', summary: 'Warn Message',  });
}

showErrorViaMessages() {

    this.messages.push({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
}

showSuccessViaMessages() {

    this.messages.push({ severity: 'success', summary: 'Success Message', detail: 'Message sent' });
}
}

/* import { Component } from '@angular/core';
import { Message, MessageService } from 'primeng/api';

@Component({
    templateUrl: './messagesdemo.component.html',
    providers: [MessageService]
})
export class MessagesDemoComponent {

    messages: Message[] = [];

    constructor(private service: MessageService) { }

    showInfoViaToast() {
        this.service.add({ key: 'tst', severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    }

    showWarnViaToast() {
        this.service.add({ key: 'tst', severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' });
    }

    showErrorViaToast() {
        this.service.add({ key: 'tst', severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
    }

    showSuccessViaToast() {
        this.service.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Message sent' });
    }

    showInfoViaMessages() {
        this.messages = [];
        this.messages.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    }

    showWarnViaMessages() {
        this.messages = [];
        this.messages.push({ severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' });
    }

    showErrorViaMessages() {
        this.messages = [];
        this.messages.push({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
    }

    showSuccessViaMessages() {
        this.messages = [];
        this.messages.push({ severity: 'success', summary: 'Success Message', detail: 'Message sent' });
    }

}
 */