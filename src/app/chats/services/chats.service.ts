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
    ) {}

    retrieveRooms(offset: number = 0): Observable<ChatRoom[]> {

    const url = `${ this.baseUrl }/api/rooms?offset=${offset}`

    const headers = this.getAuthHeaders()

    return this.http.get<ChatRoom[]>( url, { headers } )
      .pipe(
        catchError( () => of([]))
      )
  }

  findRooms( term: string ): Observable<ChatRoom[]> {

    const url: string = `${ this.baseUrl }/api/rooms/${term}`

    const headers = this.getAuthHeaders()


      return this.http.get<ChatRoom[]>( url, { headers } )
      .pipe(
        catchError( () => of([]) ),
        delay( 1000 ),
      )
  }

  getPaginationRooms(): Observable<number> {
    const url: string = `${ this.baseUrl }/api/rooms/total`

    const headers = this.getAuthHeaders()

    return this.http.get<number>(url, { headers } )
      .pipe(
        map( number => Math.ceil(number / 10) )
      )
  }

  getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token')

    return new HttpHeaders()
      .set('Authorization', `Bearer ${ token }`)

  }

}
