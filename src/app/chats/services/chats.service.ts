import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChatRoom } from '../interfaces/Chat-room.interface';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environments';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  private readonly baseUrl: string = environment.baseUrl

  constructor(
    private http: HttpClient,
    private authService: AuthService
    ) {}

  findAllRooms(): Observable<ChatRoom[]> {

    const url: string = `${ this.baseUrl }/api/rooms`
    const token = localStorage.getItem('token')

    // this.authService.checkAuthStatus()

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${ token }`)

    return this.http.get<ChatRoom[]>( url, { headers } )
      .pipe(
        catchError( () => of([]))
      )
  }

  findRoom( term: string ): Observable<ChatRoom[]> {

    const url: string = `${ this.baseUrl }/api/rooms/${term}`
    const token = localStorage.getItem('token')

    this.authService.checkAuthStatus()
    // if ( !token ) {
    //   this.authService.logout()
    // }

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${ token }`)

      return this.http.get<ChatRoom[]>( url, { headers } )
      .pipe(
        catchError( () => of([]) ),
        delay( 1000 ),
      )
  }

}
