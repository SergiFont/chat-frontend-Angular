import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './home/pages/home-layout/home-layout.component';
import { isAuthenticatedGuard } from './auth/guards/is-authenticated.guard';
import { checkTokenGuard } from './auth/guards/check-token.guard';

const routes: Routes = [
  {
    path: '', component: HomeLayoutComponent,
    // canActivate: [isAuthenticatedGuard],
    children: [
      { path: 'chats', canActivate: [checkTokenGuard], loadChildren: () => import('./chats/chats.module').then(m => m.ChatsModule)},
      { path: 'users', canActivate: [checkTokenGuard], loadChildren: () => import('./users/users.module').then(m => m.UsersModule)}
    ]
  },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
  },

  {
    path: '**',
    redirectTo: ''
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
