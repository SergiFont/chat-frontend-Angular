import { Component, Input } from '@angular/core';
import { APIUserResponse, ChatUser } from '../../interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styles: [
  ]
})
export class UserTableComponent {

  @Input()
  public users?: Observable<ChatUser[]>

}
