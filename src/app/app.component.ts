import { Component, computed, effect, inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth/services/auth.service';
import { AuthStatus } from './auth/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private authService = inject( AuthService )
  private router = inject(Router)

  public finishAuthCheck = computed<boolean> ( () => {

    if ( this.authService.authStatus() === AuthStatus.checking) return false

    return true
  })

  public authStatusChangedEffect = effect( () => {
    switch( this.authService.authStatus() ) {

      case AuthStatus.authenticated:
        console.log('authenticated');
        this.router.navigateByUrl('/home')
        return

      case AuthStatus.notAuthenticated:
        console.log('noauth');
        this.router.navigateByUrl('/auth/login')
        return
    }

  })

}
