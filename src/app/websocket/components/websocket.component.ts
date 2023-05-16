import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../services/websocket.service';

@Component({
  selector: 'app-websocket',
  templateUrl: './websocket.component.html',
  styles: [
  ]
})
export class WebsocketComponent implements OnInit {

  constructor(
    public wsService: WebsocketService
  ) {}
  ngOnInit(): void {
    
  }

}
