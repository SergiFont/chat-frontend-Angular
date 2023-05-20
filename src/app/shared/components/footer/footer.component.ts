import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
// import { WebsocketService } from 'src/app/websocket/services/websocket.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(
    // public wsService: WebsocketService
    public authService: AuthService
  ) {}

}
