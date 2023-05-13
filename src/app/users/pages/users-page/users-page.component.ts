import { Component, OnInit } from '@angular/core';
import { APIUserResponse, ChatUser } from '../../interfaces'
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'users-page',
  templateUrl: './users-page.component.html',
  styles: [
  ]
})
export class UsersPageComponent implements OnInit {

  public defaultUsers?: ChatUser[] = []
  public chatUsers?: ChatUser[] = []

  constructor( private usersService: UsersService ) {}

  ngOnInit(): void {
    this.usersService.findAllUsers()
      .subscribe ( users => {

          console.log(users);
          this.chatUsers = users

      })
  }

}
