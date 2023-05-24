import { Component, OnInit } from '@angular/core';
import { APIUserResponse, ChatUser } from '../../interfaces'
import { UsersService } from '../../services/users.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'users-page',
  templateUrl: './users-page.component.html',
  styles: [
  ]
})
export class UsersPageComponent {

  public chatUsers!: Observable<ChatUser[]>
  public numberUsers!: Observable<number>
  public isLoading: boolean = false

  constructor(private usersService: UsersService) {
    this.findUsers()
  }



  findUsers(offset?: number): void {

    this.numberUsers = this.usersService.getPaginationUsers()

    this.chatUsers = this.usersService.findUsers(offset)

  }

  searchByName(term: string): void {

    this.isLoading = true

    this.chatUsers = this.usersService.findUsersByName(term)
      .pipe(
        tap(() => {
          this.isLoading = false
        })
      )

  }

}
