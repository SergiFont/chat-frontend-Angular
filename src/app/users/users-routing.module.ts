import { Routes } from '@angular/router';
import { isAuthenticatedGuard } from '../auth/guards/is-authenticated.guard';
import { UsersPageComponent } from './pages/users-page/users-page.component';

export const routes: Routes = [
    {
      path: 'users',
      canActivate: [ isAuthenticatedGuard ],
      component: UsersPageComponent
    }
]