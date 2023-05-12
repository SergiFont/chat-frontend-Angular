import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ChatsPageComponent } from './pages/chats-page/chats-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    ChatsPageComponent,
    SidebarComponent,
    UsersPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomePageComponent,
    ChatsPageComponent,
    SidebarComponent,
    UsersPageComponent
  ]
})
export class SharedModule { }