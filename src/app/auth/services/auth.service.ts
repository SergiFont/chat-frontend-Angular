import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject, signal, computed } from '@angular/core';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environments';
import { AuthStatus, CheckTokenResponse, LoginResponse, RegisterResponse, User } from '../interfaces';

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


  constructor() {
    this.checkAuthStatus().subscribe()
  }

  private setAuthentication( user: User, token: string): boolean {

    this._currentUser.set( user )
    this._authStatus.set( AuthStatus.authenticated )
    localStorage.setItem('token', token)

    return true
  }

  register( email: string, username: string, password: string) {

    const url = `${ this.baseUrl }/api/auth/register`
    const body = { email, username, password }

    return this.http.post<RegisterResponse>( url, body)
      .pipe(
        map( ({ user, token }) => this.setAuthentication( user, token)),
        catchError( err => throwError( () => err.error.message))
      )

  }

  login( email:string, password: string ): Observable<boolean> {

    const url = `${ this.baseUrl }/api/auth/login`
    const body = { email, password }

    return this.http.post<LoginResponse>( url, body )
      .pipe(
        map( ({ user, token }) => this.setAuthentication( user, token )),
        catchError( err => throwError( () => err.error.message )
        )
      )
  }

  logout() {
    localStorage.removeItem('token')
    this._currentUser.set(null)
    this._authStatus.set( AuthStatus.notAuthenticated )
  }

  checkAuthStatus():Observable<boolean> {

    const url = `${ this.baseUrl }/api/auth`
    const token = localStorage.getItem('token')

    if ( !token ) {
      this.logout()
      return of( false )
    }

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${ token }`)

    return this.http.get<CheckTokenResponse>( url, { headers })
      .pipe(
        map( ({ user, token }) => this.setAuthentication( user, token )),
          catchError((err) => {
            console.log({err});
            this._authStatus.set( AuthStatus.notAuthenticated )
            return of(false
            )})
      )
  }
}