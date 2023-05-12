import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isAuthenticatedGuard } from './auth/guards/is-authenticated.guard';
import { isNotAuthenticatedGuard } from './auth/guards/is-not-authenticated.guard';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { ChatsPageComponent } from './shared/pages/chats-page/chats-page.component';
import { UsersPageComponent } from './shared/pages/users-page/users-page.component';

const routes: Routes = [

  {
    path: 'auth',
    // guards
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
  },

  // {
  //   path: 'dashboard/home',
  //   canActivate: [ isAuthenticatedGuard ],
  //   component: HomePageComponent
  // },
  // {
  //   path: 'dashboard/chats',
  //   canActivate: [ isAuthenticatedGuard ],
  //   component: ChatsPageComponent
  // },
  // {
  //   path: 'dashboard/users',
  //   canActivate: [ isAuthenticatedGuard ],
  //   component: UsersPageComponent
  // },

  {
    path: 'dashboard',
    canActivate: [ isAuthenticatedGuard ],
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule ),
  },

  {
    path: '**',
    redirectTo: 'dashboard'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
