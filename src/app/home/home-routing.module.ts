import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersPageComponent } from '../users/pages/users-page/users-page.component';
import { isAuthenticatedGuard } from '../auth/guards/is-authenticated.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ChatsPageComponent } from '../chats/pages/chats-page/chats-page.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [ isAuthenticatedGuard ],
    component: HomePageComponent,
    children: [
      {
        path: 'users',
        canActivate: [ isAuthenticatedGuard ],
        component: UsersPageComponent,
      },
      {
        path: 'chats',
        canActivate: [ isAuthenticatedGuard ],
        component: ChatsPageComponent
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }