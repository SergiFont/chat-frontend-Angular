import { RouterModule, Routes } from '@angular/router';
import { isAuthenticatedGuard } from '../auth/guards/is-authenticated.guard';
import { ChatsPageComponent } from './pages/chats-page/chats-page.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
      path: 'chats',
      canActivate: [ isAuthenticatedGuard ],
      component: ChatsPageComponent
    }
]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class ChatsRoutingModule { }