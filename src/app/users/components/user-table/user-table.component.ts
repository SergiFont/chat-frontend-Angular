import { Component, Input } from '@angular/core';
import { APIUserResponse, ChatUser } from '../../interfaces';

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styles: [
  ]
})
export class UserTableComponent {

  @Input()
  public users?: ChatUser[] = []

}
