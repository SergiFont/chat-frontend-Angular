import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { PaginationComponent } from './components/pagination/pagination.component';



@NgModule({
  declarations: [
    SidebarComponent,
    SearchBoxComponent,
    LoadingSpinnerComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports: [
    SidebarComponent,
    SearchBoxComponent,
    LoadingSpinnerComponent,
    MessagesModule,
		MessageModule,
		ButtonModule,
		ToastModule,
		InputTextModule,
    PaginationComponent
  ],
})
export class SharedModule { }