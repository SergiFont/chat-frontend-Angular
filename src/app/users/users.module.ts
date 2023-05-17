import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { SharedModule } from '../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { UserTableComponent } from './components/user-table/user-table.component';
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  declarations: [
    UsersPageComponent,
    UserTableComponent,
    UserListComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
  ],
  exports: [
    UserListComponent,
  ]
})
export class UsersModule { }