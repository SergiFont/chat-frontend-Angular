import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { HomePageComponent } from '../shared/pages/home-page/home-page.component';
import { ChatsPageComponent } from '../shared/pages/chats-page/chats-page.component';
import { UsersPageComponent } from '../shared/pages/users-page/users-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    // children: []
  },
  {
    path: 'home',
    component: HomePageComponent,
    // children: []
  },
  {
    path: 'chats',
    component: ChatsPageComponent,
    // children: []
  },
  {
    path: 'users',
    component: UsersPageComponent,
    // children: []
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
