import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { checkTokenGuard } from './auth/guards/check-token.guard';
import { HomeLayoutComponent } from './home/pages/home-layout/home-layout.component';
// import { isAuthenticatedGuard } from './auth/guards/is-authenticated.guard';
// import { checkTokenGuard } from './auth/guards/check-token.guard';
// import { HomePageComponent } from './home/pages/home-page/home-page.component';
// import { AuthLayoutComponent } from './auth/layouts/auth-layout/auth-layout.component';
// import { HomeLayoutComponent } from './home/pages/home-layout/home-layout.component';

const routes: Routes = [
  {
    path: '', component: HomeLayoutComponent,
    canActivate: [checkTokenGuard],
    children: [
      { path: 'chats', loadChildren: () => import('./chats/chats.module').then(m => m.ChatsModule)},
      { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)}
    ],
    // canActivate: [checkTokenGuard],
    // loadChildren: () => import('./home/home.module').then( m => m.HomeModule ),
  },

  {
    path: 'auth',
    // guards
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
  },

  // {
  //   path: 'home',
  //   canActivate: [ isAuthenticatedGuard, checkTokenGuard ],
  //   loadChildren: () => import('./home/home.module').then( m => m.HomeModule ),
  //   component: HomeLayoutComponent
  // },

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
