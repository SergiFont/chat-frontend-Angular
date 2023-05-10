import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject, signal, computed } from '@angular/core';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environments';
import { AuthStatus, LoginResponse, User } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl: string = environment.baseUrl
  private http = inject( HttpClient )

  private _currentUser = signal<User|null>(null)
  private _authStatus = signal<AuthStatus>( AuthStatus.checking)

  public currentUser = computed( () => this._currentUser() )
  public authStatus = computed( () => this._authStatus() )


  constructor() { }


  login( email:string, password: string ): Observable<boolean> {

    const url = `${ this.baseUrl }/api/auth/login`
    const body = { email, password }

    return this.http.post<LoginResponse>( url, body )
      .pipe(
        tap( ({ user, token }) => {
          this._currentUser.set( user )
          this._authStatus.set( AuthStatus.authenticated )
          localStorage.setItem('token', token)

          console.log({ user, token });
        }),

        map( () => true ),

        catchError( err => throwError( () => err.error.message )

// TODO finish this implementation

        )
      )
  }

  checkAuthStatus():Observable<boolean> {

    const url = `${ this.baseUrl }/auth/check-token`
    const token = localStorage.getItem('token')

    if ( !token ) return of( false )

    const headers = new HttpHeaders()
      .set('')

  }

}


