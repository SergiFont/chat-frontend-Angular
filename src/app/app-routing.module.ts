import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isAuthenticatedGuard } from './auth/guards/is-authenticated.guard';
import { checkTokenGuard } from './auth/guards/check-token.guard';

const routes: Routes = [

  {
    path: 'auth',
    // guards
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
  },

  {
    path: 'home',
    canActivate: [ isAuthenticatedGuard ],
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule ),
  },

  {
    path: '**',
    redirectTo: 'home'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
