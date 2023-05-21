import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject, signal, computed } from '@angular/core';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environments';
import { AuthStatus, CheckTokenResponse, LoginResponse, RegisterResponse, User } from '../interfaces';
import { Socket } from 'ngx-socket-io'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl: string = environment.baseUrl
  // private http = inject(HttpClient)

  private _currentUser = signal<User | null>(null)
  private _authStatus = signal<AuthStatus>(AuthStatus.checking)

  public currentUser = computed(() => this._currentUser())
  public authStatus = computed(() => this._authStatus())
  public socketStatus = false


  constructor(
    private readonly socket: Socket,
    private readonly http: HttpClient
  ) {
    // this.checkAuthStatus().subscribe()
  }


  register(email: string, username: string, password: string): Observable<boolean> {

    const url = `${this.baseUrl}/api/auth/register`
    const body = { email, username, password }

    return this.http.post<RegisterResponse>(url, body)
      .pipe(
        map(({ user, token }) => this.setAuthentication(user, token)),
        catchError(err => throwError(() => err.error.message))
      )

  }

  login(email: string, password: string): Observable<boolean> {

    const url = `${this.baseUrl}/api/auth/login`
    const body = { email, password }

    return this.http.post<LoginResponse>(url, body)
      .pipe(
        map(({ user, token }) => this.setAuthentication(user, token)),
        catchError(err => throwError(() => err.error.message)
        )
      )
  }

  logout(): void {
    localStorage.removeItem('token')
    this._currentUser.set(null)
    this._authStatus.set(AuthStatus.notAuthenticated)
    this.socket.disconnect()
    this.socketStatus = false
  }

  private setAuthentication(user: User, token: string): boolean {

    this._currentUser.set(user)
    this._authStatus.set(AuthStatus.authenticated)
    localStorage.setItem('token', token)

    return true
  }

  checkAuthStatus(): Observable<boolean> {

    const url = `${this.baseUrl}/api/auth/checkAuth`
    const token = localStorage.getItem('token')

    if (!token) {
      this.logout()
      return of(false)
    }

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)

    return this.http.get<CheckTokenResponse>(url, { headers })
      .pipe(
        map(({ user, token }) => {
          console.log('estoy en el map');
          return this.setAuthentication(user, token)
        }),
        catchError((err) => {
          this.logout()
          console.log(err);
          throwError(() => {
            this._authStatus.set(AuthStatus.notAuthenticated)
          })
          return of(false)
        })
      )
  }


  checkSocketStatus(id: string) {

    if (!this.socketStatus) {

      this.connectSocket()
      this.loginWs(id)

    }

    this.socket.removeAllListeners()

    this.socket.on('connect', () => {
      console.log('Connected to the server');
      this.socketStatus = true
    })

    this.socket.on('disconnect', () => {
      console.log('Disconnected from the server');
      this.socketStatus = false
    })

    this.socketStatus = true

  }

  emit(event: string, payload?: any): void {

    // console.log('Emitting ', event);
    this.socket.emit(event, payload)

  }

  listen(event: string): Observable<unknown> {
    return this.socket.fromEvent(event)
  }

  loginWs(id: string): void {
    this.emit('configuring-user', { id }
    )
  }

  connectSocket(): void {
    this.socket.connect()
  }

  disconnectSocket(): void {
    this.socket.disconnect()
  }

}