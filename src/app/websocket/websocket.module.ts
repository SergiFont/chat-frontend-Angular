import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsocketComponent } from './components/websocket.component';



@NgModule({
  declarations: [
    WebsocketComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WebsocketComponent
  ]
})
export class WebsocketModule { }
