import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { AuthStatus } from '../interfaces';
import { tap } from 'rxjs';

export const checkTokenGuard: CanActivateFn = (childRoute, state) => {
  const authService  = inject( AuthService )

  console.log(state);
  return authService.checkAuthStatus()

};


