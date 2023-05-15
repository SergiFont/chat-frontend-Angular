import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isAuthenticatedGuard } from './auth/guards/is-authenticated.guard';
import { checkTokenGuard } from './auth/guards/check-token.guard';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { AuthLayoutComponent } from './auth/layouts/auth-layout/auth-layout.component';

const routes: Routes = [

  {
    path: 'auth',
    // guards
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
    // component: AuthLayoutComponent
  },

  {
    path: 'home',
    canActivate: [ isAuthenticatedGuard ],
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule ),
    component: HomePageComponent
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
