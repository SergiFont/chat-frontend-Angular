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
    ) {}

  findUsers( offset: number = 0 ): Observable<ChatUser[]> {

    const url = `${ this.baseUrl }/api/auth?offset=${offset}`

    const headers = this.getAuthHeaders()

    return this.http.get<APIUserResponse>( url, { headers } )
      .pipe(
        map( (response: APIUserResponse) => response.user),
        catchError( () => of([]))
      )
  }

  findUsersByName( term: string ): Observable<ChatUser[]> {

    const url: string = `${ this.baseUrl }/api/auth/${ term }`

    const headers = this.getAuthHeaders()

    return this.http.get<APIUserResponse>( url, { headers } )
      .pipe(
        map( (response: APIUserResponse) => response.user ),
        catchError( () => of([])),
        delay( 1000 )
      )
  }

  getPaginationUsers(): Observable<number> {
    const url: string = `${ this.baseUrl }/api/auth/total`

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
