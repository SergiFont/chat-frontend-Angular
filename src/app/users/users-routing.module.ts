import { RouterModule, Routes } from '@angular/router';
import { isAuthenticatedGuard } from '../auth/guards/is-authenticated.guard';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { NgModule } from '@angular/core';
import { checkTokenGuard } from '../auth/guards/check-token.guard';

export const routes: Routes = [
  {
    path: 'users',
    canActivate: [ checkTokenGuard ],
    component: UsersPageComponent,
  }
]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }