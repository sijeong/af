import { Component } from '@angular/core';
import { OidcFacade } from 'ng-oidc-client';
import { AuthGuard } from '../services/auth.guard';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  auth$ = this.oidc.loggedIn$;
  constructor(private oidc: OidcFacade, public guard: AuthGuard, public route: ActivatedRoute) { }


  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  onLoginClick() {
    this.oidc.signinRedirect({
      data: {
        // redirect_url: 'http://localhost:4200/'
      }
    });
  }

  onLogoutClick() {
    this.oidc.signoutRedirect({
      data: {
        // redirect_url: 'http://localhost:4200/'
      }
    })
  }
}

