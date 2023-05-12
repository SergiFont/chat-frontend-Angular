Voy a describir la estructura de mi proyecto de Angular, entre comillas voy a explicar que contienen algunos de los directorios:
```
- src
  - app
    -auth "contiene todo lo relacionado a las paginas, servicios y componentes de autenticación y autorización"
    -dashboard "página principal, sólo accesible a usuarios logeados"
    -shared "componentes y páginas comunes"
  - app-routing.module.ts
  - app.component.html
  - app.component.ts
  -app.module.ts
```
A continuación, voy a facilitarte el contenido de algunos archivos.
app.module:
`` 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
`` 
app.component.ts:
`` 
import { Component, computed, effect, inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth/services/auth.service';
import { AuthStatus } from './auth/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private authService = inject( AuthService )
  private router = inject(Router)

  public finishAuthCheck = computed<boolean> ( () => {

    console.log(this.authService.authStatus());

    if ( this.authService.authStatus() === AuthStatus.checking) return false

    return true
  })

  public authStatusChangedEffect = effect( () => {

    switch( this.authService.authStatus() ) {
      case AuthStatus.checking:
        return

      case AuthStatus.authenticated:
        this.router.navigateByUrl('/dashboard')
        return

      case AuthStatus.notAuthenticated:
        this.router.navigateByUrl('/auth/login')
        return
    }

  })

}
`` 
app.component.html:
`` 

  <h1 *ngIf="!finishAuthCheck()">
    Loading
  </h1>


    <router-outlet *ngIf="finishAuthCheck()"></router-outlet>
`` 
app-routing.module.ts:
`` 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isAuthenticatedGuard } from './auth/guards/is-authenticated.guard';

const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
  },

  {
    path: 'dashboard',
    canActivate: [ isAuthenticatedGuard ],
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule ),
  },

  {
    path: '**',
    redirectTo: 'dashboard'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
`` 
shared/components/sidebar/sidebar.component.html:
``
<h2>Menu</h2>
<hr>

<ul class="list-group">

  <li routerLink="home"
  routerLinkActive="active"
  class="list-group-item">
    Home Page
  </li>

  <li routerLink="chats"
  routerLinkActive="active"
  class="list-group-item">
    Chats Page
  </li>

  <li routerLink="users"
  routerLinkActive="active"
  class="list-group-item">
    Users Page
  </li>

</ul>
``
shared/components/sidebar/sidebar.component.ts:
``
import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

}
``
shared/shared.module.ts:
``
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
``
dashboard/layouts/dashboard-layout/dashboard-layout.component.html:
``
<div class="row mt-4">

  <div class="col-3">

    <shared-sidebar></shared-sidebar>

  </div>

  <div class="col">

    <!-- <shared-home-page></shared-home-page> -->
    <router-outlet></router-outlet>
  </div>

</div>

  <!-- <h3>User</h3> -->
  <!-- <pre>{{ user() | json }}</pre> -->




<br>

<button (click)="onLogout()">
  Cerrar Sesión
</button>
``
dashboard/layouts/dashboard-layout/dashboard-layout.component.ts:
``
import { Component, computed, inject } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent {

  private authService = inject( AuthService );
  public actualComponent = ''

  public user = computed(() => this.authService.currentUser() );
  
  onLogout() {
    this.authService.logout();
  }

}

``
dashboard/layouts/dashboard-layout/dashboard-routing.module.ts:
``
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

``
dashboard/layouts/dashboard-layout/dashboard.module.ts:
``
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DashboardLayoutComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class DashboardModule { }

``

Una vez el usuario está autenticado, se muestra la página del dashboard. En esta, inicialmente aparece el sidebar. Cuando se hace click en una de las opciones, me redirige a la página home, chats o users respectivamente. Pero no quiero eso, quiero que la página se muestre en un lateral del html, sin perder el sidebar, y que en el side bar se muestre resaltado el link escogido, con la propiedad routerLinkActive.