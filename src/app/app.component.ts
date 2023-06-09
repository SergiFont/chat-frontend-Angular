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

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  public authStatusChangedEffect = effect(() => {

    if (this.authService.authStatus() === AuthStatus.notAuthenticated) {

      this.router.navigateByUrl('/auth/login')
      return

    }
  })

}
