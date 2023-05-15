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

  // public defaultUsers?: ChatUser[] = []
  public chatUsers?: ChatUser[] = []
  public isLoading: boolean = false

  constructor( private usersService: UsersService ) {}

  ngOnInit(): void {
    this.usersService.findAllUsers()
      .subscribe ( users => {

          this.chatUsers = users

      })
  }

  searchByName( term: string ): void {

    this.isLoading = true

   this.usersService.findUsersByName( term )
      .subscribe( user => {
        this.chatUsers = user
        this.isLoading = false
      })

  }

}
