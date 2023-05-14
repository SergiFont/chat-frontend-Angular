// import { Component } from '@angular/core';
// import { ChatRoom } from '../../interfaces/Chat-room.interface';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ChatsService } from '../../services/chats.service';
// import { switchMap } from 'rxjs';

// @Component({
//   selector: 'by-chat-name',
//   templateUrl: './by-chat-name.component.html',
//   styles: [
//   ]
// })
// export class ByChatNameComponent {

//   public room?: ChatRoom
//   public isLoading: boolean = false

//   constructor(
//     private activatedRoute: ActivatedRoute,
//     private router: Router,
//     private chatsService: ChatsService,
//      ) {}

//      searchByName(): void {

//       this.isLoading = true

//       this.activatedRoute.params
//         .pipe(
//           switchMap( ({ term }) => this.chatsService.findRoom( term ))
//         )
//         .subscribe( room => {

//           if (!room ) return this.router.navigateByUrl('')

//           return this.room = room
//         })

//     }

//   }
