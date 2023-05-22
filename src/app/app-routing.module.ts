import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './home/pages/home-layout/home-layout.component';
import { checkTokenGuard } from './auth/guards/check-token.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [checkTokenGuard],
    canActivateChild: [checkTokenGuard],
    component: HomeLayoutComponent,

    children: [
      { path: 'chats', loadChildren: () => import('./chats/chats.module').then(m => m.ChatsModule)},
      { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)}
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
