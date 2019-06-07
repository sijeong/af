import { Component } from '@angular/core';
import { OidcFacade } from 'ng-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  auth$ = this.oidc.loggedIn$;

  constructor(private oidc: OidcFacade){}
}
