import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatsPageComponent } from '../shared/pages/chats-page/chats-page.component';
import { UsersPageComponent } from '../shared/pages/users-page/users-page.component';
import { isAuthenticatedGuard } from '../auth/guards/is-authenticated.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [ isAuthenticatedGuard ],
    component: HomePageComponent,
    children: [
      {
        path: 'chats',
        canActivate: [ isAuthenticatedGuard ],
        component: ChatsPageComponent,
      },
      {
        path: 'users',
        canActivate: [ isAuthenticatedGuard ],
        component: UsersPageComponent,
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }