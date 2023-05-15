import { Component, computed, inject } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [
    './sidebar.component.css'
  ]
})
export class SidebarComponent {

  private authService = inject( AuthService );
  public actualComponent = ''

  public user = computed(() => this.authService.currentUser() );

  onLogout() {
    this.authService.logout();
  }

}
