import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersPageComponent } from './pages/users-page/users-page.component';

@NgModule({
  declarations: [
    UsersPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class ChatsModule { }