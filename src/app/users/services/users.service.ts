import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { environment } from 'src/environments/environments';
import { APIUserResponse, ChatUser } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly baseUrl: string = environment.baseUrl

  constructor(
    private http: HttpClient,
    private authService: AuthService
    ) {}

  findAllUsers(): Observable<ChatUser[]> {

    const url: string = `${ this.baseUrl }/api/auth`
    const token = localStorage.getItem('token')

    if ( !token ) {
      this.authService.logout()
    }

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${ token }`)

    return this.http.get<ChatUser[]>( url, { headers } )
      .pipe(
        catchError( () => of([]))
      )
  }

  findUserByTerm( term: string ): Observable<ChatUser | null> {

    const url: string = `${ this.baseUrl }/api/auth/${ term }`
    const token = localStorage.getItem('token')

    if ( !token ) {
      this.authService.logout()
    }

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${ token }`)

    return this.http.get<ChatUser>( url, { headers } )
      .pipe(
        map( user => user.username !== undefined ? user : null ),
        catchError( () => of(null))
      )
  }
}
