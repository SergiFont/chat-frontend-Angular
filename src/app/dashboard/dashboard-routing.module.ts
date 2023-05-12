import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { HomePageComponent } from '../shared/pages/home-page/home-page.component';
import { ChatsPageComponent } from '../shared/pages/chats-page/chats-page.component';
import { UsersPageComponent } from '../shared/pages/users-page/users-page.component';
import { isAuthenticatedGuard } from '../auth/guards/is-authenticated.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
  },
  {
    path: 'home',
    canActivate: [ isAuthenticatedGuard ],
    component: HomePageComponent,
  },
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
