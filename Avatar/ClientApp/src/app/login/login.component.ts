import { Component, OnInit } from '@angular/core';
import { OidcFacade } from 'ng-oidc-client';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth$ = this.oidc.loggedIn$;
  returnUrl;
  constructor(private oidc: OidcFacade, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    // console.log('///' + this.returnUrl)
  }
  onLoginClick() {
    this.oidc.signinRedirect({
      data: {
        redirect_url: this.returnUrl
      }
    });
  }
  onRegisterClick() {
    this.router.navigate(['/register'])
  }
}
