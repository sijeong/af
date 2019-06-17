import { Component, Inject } from '@angular/core';
import { AuthGuard } from '../services/auth.guard';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  auth$

  constructor(private authService: AuthService, public guard: AuthGuard, public route: ActivatedRoute, @Inject(LOCAL_STORAGE) private storage: StorageService) {
    this.auth$ = this.authService.authStatus$
  }

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  onLoginClick() {
    this.authService.login();
  }

  onLogoutClick() {
    this.storage.set('redirect', '/');
    this.authService.signout();
  }
}

