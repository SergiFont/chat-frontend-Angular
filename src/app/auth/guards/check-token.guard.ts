import { CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { AuthStatus } from '../interfaces';

export const checkTokenGuard: CanActivateChildFn = (childRoute, state) => {
  const authService  = inject( AuthService )

  authService.checkAuthStatus().subscribe()

  return true;
};


