import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
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

    return this.http.get<APIUserResponse>( url, { headers } )
      .pipe(
        map( (response: APIUserResponse) => response.user),
        catchError( () => of([]))
      )
  }

  findUsersByName( term: string ): Observable<ChatUser[]> {

    const url: string = `${ this.baseUrl }/api/auth/${ term }`
    const token = localStorage.getItem('token')

    if ( !token ) {
      this.authService.logout()
    }

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${ token }`)

    return this.http.get<APIUserResponse>( url, { headers } )
      .pipe(
        tap( response => console.log( 'Users:', response )),
        map( (response: APIUserResponse) => response.user ),
        catchError( () => of([])),
        delay( 1000 )
      )
  }
}
