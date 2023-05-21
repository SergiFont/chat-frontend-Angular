import { RouterModule, Routes } from '@angular/router';
import { isAuthenticatedGuard } from '../auth/guards/is-authenticated.guard';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
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