import { Component, computed, inject } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  private authService = inject( AuthService );
  public actualComponent = ''

  public user = computed(() => this.authService.currentUser() );

  onLogout() {
    this.authService.logout();
  }

}
